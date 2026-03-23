const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'clientlogos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg')).sort((a,b) => {
  return parseInt(a) - parseInt(b);
});

async function analyze() {
  const config = [];
  
  for (const file of files) {
    try {
      const img = await Jimp.read(path.join(dir, file));
      const w = img.bitmap.width;
      const h = img.bitmap.height;
      
      // Analyze corners to determine background
      let bgR=0, bgG=0, bgB=0, bgA=0;
      const corners = [[0,0], [w-1,0], [0,h-1], [w-1,h-1]];
      for(const [cx, cy] of corners) {
        const c = Jimp.intToRGBA(img.getPixelColor(cx, cy));
        bgR+=c.r; bgG+=c.g; bgB+=c.b; bgA+=c.a;
      }
      bgR/=4; bgG/=4; bgB/=4; bgA/=4;
      
      const isWhiteBg = bgR>230 && bgG>230 && bgB>230 && bgA>200;
      const isBlackBg = bgR<25 && bgG<25 && bgB<25 && bgA>200;
      const hasSolidBg = isWhiteBg || isBlackBg;

      // Find bounding box of content (ignoring background)
      let minX = w, minY = h, maxX = 0, maxY = 0;
      let contentR=0, contentG=0, contentB=0, contentCount=0;

      img.scan(0,0,w,h, function(x, y, idx) {
        const r = this.bitmap.data[idx];
        const g = this.bitmap.data[idx+1];
        const b = this.bitmap.data[idx+2];
        const a = this.bitmap.data[idx+3];

        let isBg = false;
        if (a < 50) isBg = true;
        else if (isWhiteBg && r>220 && g>220 && b>220) isBg = true;
        else if (isBlackBg && r<30 && g<30 && b<30) isBg = true;

        if (!isBg) {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
          
          contentR+=r; contentG+=g; contentB+=b;
          contentCount++;
        }
      });

      let scale = 1.0;
      let isDarkContent = false;
      let isLightContent = false;

      if (contentCount > 0) {
        const contentH = Math.max(1, maxY - minY);
        // How much of the image height is actually used?
        const usedRatio = contentH / h;
        // If content is very small relative to image, we scale it up
        scale = Math.min(3.5, 1 / usedRatio);
        // Round to 1 decimal
        scale = Math.round(scale * 10) / 10;
        
        // Ensure scale is sensible
        if (scale < 1) scale = 1;

        contentR /= contentCount;
        contentG /= contentCount;
        contentB /= contentCount;
        const L = (contentR + contentG + contentB) / 3;
        if (L < 100) isDarkContent = true;
        if (L > 180) isLightContent = true;
      } else {
        // Empty image ?
        isDarkContent = true;
      }

      // Determine CSS strategies
      let filter = "";
      let blend = "";
      
      if (hasSolidBg) {
        blend = "mix-blend-screen";
        if (isWhiteBg) {
          // White bg, dark logo -> invert will make bg black (screen drops it) and logo white.
          filter = "invert(1) grayscale(1) brightness(1.5)";
        } else if (isBlackBg) {
           // Black bg -> screen automatically drops black. 
           // If logo is white, just screen is fine.
           // If logo is dark colored, screen drops it mostly. So we invert it?
           if (isDarkContent) {
             // Dark on black? Invert makes it light on white. Then screen won't drop white bg.
             // We'd have to use multiply!
             filter = "grayscale(1) brightness(1.5)";
           } else {
             filter = "grayscale(1) brightness(1.5)";
           }
        }
      } else {
        // Transparent BG
        if (isDarkContent) {
          filter = "invert(1) grayscale(1) brightness(1.5)";
        } else {
          filter = "grayscale(1) brightness(1.5)";
        }
      }

      // Convert to Tailwind equivalents
      let twFilter = "grayscale";
      if (filter.includes("invert")) twFilter += " invert contrast-125 brightness-150";
      else twFilter += " contrast-125 brightness-150";
      
      let twBlend = blend || "mix-blend-normal";

      config.push(`  { src: '/clientlogos/${file}', scale: ${scale}, filter: '${twFilter}', blend: '${twBlend}' },`);
    } catch(e) {
       config.push(`  // Error reading ${file}: ${e.message}`);
    }
  }

  console.log("const clientLogosConfig = [\n" + config.join("\n") + "\n];");
}

analyze();
