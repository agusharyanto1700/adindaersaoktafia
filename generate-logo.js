import ZAI from 'z-ai-web-dev-sdk';
import { writeFileSync } from 'fs';
import path from 'path';

async function generateLogo() {
  try {
    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: 'A professional and modern logo for a food restaurant called "ADINDA ERSA OKTAFIA". The logo should feature a bowl or utensil icon with warm orange and red colors, clean typography, and a food-related design. The style should be suitable for an Indonesian food restaurant. Minimalist design with white background.',
      size: '512x512'
    });

    // Returns base64 encoded image data
    const imageBase64 = response.data[0].base64;
    
    // Convert base64 to buffer and save as PNG
    const imageBuffer = Buffer.from(imageBase64, 'base64');
    const outputPath = path.join(process.cwd(), 'public', 'logo.png');
    
    writeFileSync(outputPath, imageBuffer);
    console.log('Logo generated successfully at:', outputPath);

  } catch (error) {
    console.error('Logo generation failed:', error.message);
  }
}

generateLogo();