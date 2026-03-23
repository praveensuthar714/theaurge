const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'clientlogos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

async function run() {
  for (const file of files) {
    try {
      const img = await Jimp.read(path.join(dir, file));
      
      // Auto crop transparent or solid color borders!
      img.autocrop();
      
      // Force all visible pixels to pure white to ensure NO black logos remain
      img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
         if (this.bitmap.data[idx+3] > 0) { // If it has any opacity
            this.bitmap.data[idx] = 255;
            this.bitmap.data[idx+1] = 255;
            this.bitmap.data[idx+2] = 255;
         }
      });
      
      await img.writeAsync(path.join(dir, file));
      console.log('Successfully cropped and whitened ' + file);
    } catch(e) {
      console.error(`Failed on ${file}: ${e.message}`);
    }
  }
}
run();
