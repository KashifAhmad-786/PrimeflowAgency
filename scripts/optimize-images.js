const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");

const imagesToOptimize = [
  { input: "store.png",                              output: "store.webp",                              quality: 80 },
  { input: "aura-garments.jpg",                      output: "aura-garments.webp",                      quality: 80 },
  { input: "primeRent.png",                          output: "primeRent.webp",                          quality: 80 },
  { input: "Elite Cooking Classes Landing Page.png", output: "elite-cooking.webp",                      quality: 82 },
  { input: "Wellness & Spa Landing Page.png",        output: "wellness-spa.webp",                       quality: 82 },
  { input: "Gourmet Food Delivery Landing Page.png", output: "gourmet-food.webp",                       quality: 82 },
  { input: "Professional Services Landing Page.png", output: "professional-services.webp",              quality: 82 },
  { input: "Luxury Car Wash Landing Page.png",       output: "luxury-carwash.webp",                     quality: 82 },
  { input: "medtrack-pro.png",                       output: "medtrack-pro.webp",                       quality: 85 },
  { input: "aura-garments2.jpg",                     output: "aura-garments2.webp",                     quality: 82 },
  { input: "car-wash-design.png",                    output: "car-wash-design.webp",                    quality: 85 },
  { input: "logistics-pro.png",                      output: "logistics-pro.webp",                      quality: 85 },
  { input: "screen.png",                             output: "screen.webp",                             quality: 85 },
  { input: "image.png",                              output: "image.webp",                              quality: 85 },
];

async function optimizeImages() {
  console.log("\n🚀 Starting image optimization...\n");
  let totalSaved = 0;

  for (const img of imagesToOptimize) {
    const inputPath  = path.join(publicDir, img.input);
    const outputPath = path.join(publicDir, img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping (not found): ${img.input}`);
      continue;
    }

    const inputSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .webp({ quality: img.quality, effort: 6 })
      .toFile(outputPath);

    const outputSize = fs.statSync(outputPath).size;
    const saved = inputSize - outputSize;
    const reduction = Math.round((saved / inputSize) * 100);
    totalSaved += saved;

    console.log(
      `✅ ${img.input.padEnd(45)} ${(inputSize / 1024 / 1024).toFixed(2)}MB → ${(outputSize / 1024 / 1024).toFixed(2)}MB  (${reduction}% smaller)`
    );
  }

  console.log(`\n🎉 Done! Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB\n`);
}

optimizeImages().catch(console.error);
