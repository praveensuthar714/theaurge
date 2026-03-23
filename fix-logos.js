const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'clientlogos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

async function processImage(file) {
  const filePath = path.join(dir, file);
  try {
    const image = await Jimp.read(filePath);
    const { width, height } = image.bitmap;
    
    // Check corners for background color to be safe
    let bgR = 0, bgG = 0, bgB = 0, bgA = 0;
    const corners = [[0, 0], [width-1, 0], [0, height-1], [width-1, height-1]];
    for (const [cx, cy] of corners) {
      const col = Jimp.intToRGBA(image.getPixelColor(cx, cy));
      bgR += col.r; bgG += col.g; bgB += col.b; bgA += col.a;
    }
    bgR /= 4; bgG /= 4; bgB /= 4; bgA /= 4;

    const isWhiteBg = bgR > 240 && bgG > 240 && bgB > 240 && bgA > 200;
    const isBlackBg = bgR < 15 && bgG < 15 && bgB < 15 && bgA > 200;

    image.scan(0, 0, width, height, function(x, y, idx) {
      const oR = this.bitmap.data[idx];
      const oG = this.bitmap.data[idx + 1];
      const oB = this.bitmap.data[idx + 2];
      const oA = this.bitmap.data[idx + 3];

      let newA = oA;
      const L = (oR + oG + oB) / 3;

      if (isWhiteBg) {
        // Dark pixels become opaque white, white pixels become transparent
        newA = Math.round(((255 - L) / 255) * oA);
      } else if (isBlackBg) {
        // Light pixels become opaque white, black pixels become transparent
        newA = Math.round((L / 255) * oA);
      } else {
        // Transparent BG: just keep alpha
        // But some might have gray text.
        // If it's pure white text on transparent, newA = oA.
        // It's already fine.
      }

      // Force output to be pure white
      this.bitmap.data[idx] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      this.bitmap.data[idx + 3] = newA;
    });

    await image.writeAsync(filePath);
    console.log(`Successfully normalized: ${file}`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

async function run() {
  console.log('Starting logo normalization...');
  for (const file of files) {
    await processImage(file);
  }
  console.log('All logos have been converted to transparent white PNGs!');
}

run();
