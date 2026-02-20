const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./src/assets/img/servizi";
const outputDir = "./src/assets/img/servizi";

const sizes = [400, 800, 1200];

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith(".jpg") || file.endsWith(".png")) {
    const inputPath = path.join(inputDir, file);
    const name = path.parse(file).name;

    sizes.forEach(size => {
      sharp(inputPath)
        .resize({ width: size })
        .toFormat("webp", { quality: 80 })
        .toFile(path.join(outputDir, `${name}-${size}.webp`))
        .then(() => console.log(`Created ${name}-${size}.webp`))
        .catch(err => console.error(err));
    });
  }
});
