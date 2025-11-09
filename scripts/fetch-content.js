import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
  { url: 'https://www.exfreight.com/our-services/trucking/', path: 'trucking' },
  { url: 'https://www.exfreight.com/our-services/trucking/ltl-freight/', path: 'trucking/ltl-freight' },
  { url: 'https://www.exfreight.com/our-services/trucking/ftltrucking/', path: 'trucking/ftl-trucking' },
  { url: 'https://www.exfreight.com/our-services/air-freight/', path: 'air-freight' },
  { url: 'https://www.exfreight.com/international-small-parcel-shipping/', path: 'international-small-parcel-shipping' },
  { url: 'https://www.exfreight.com/our-services/ocean-freight/', path: 'ocean-freight' },
  { url: 'https://www.exfreight.com/our-services/ocean-freight/fcl-services/', path: 'ocean-freight/fcl-services' },
  { url: 'https://www.exfreight.com/our-services/ocean-freight/lcl-shipping/', path: 'ocean-freight/lcl-shipping' },
  { url: 'https://www.exfreight.com/our-services/amazon-fba/', path: 'amazon-fba' },
  { url: 'https://www.exfreight.com/cargo-insurance/', path: 'cargo-insurance' },
  { url: 'https://www.exfreight.com/how-to-ship/', path: 'how-to-ship' },
  { url: 'https://www.exfreight.com/how-to-ship-guide/', path: 'how-to-ship-guide' },
  { url: 'https://www.exfreight.com/about-us/how-to-ship-videos/', path: 'how-to-ship-videos' },
];

const outputDir = path.join(__dirname, '../src/content');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function fetchContent(url, filePath) {
  try {
    console.log(`Fetching: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const html = await response.text();
    
    // Save raw HTML
    const fullPath = path.join(outputDir, `${filePath}.html`);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, html, 'utf-8');
    console.log(`Saved: ${fullPath}`);
    
    return html;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Starting content fetch...');
  
  for (const { url, path: filePath } of urls) {
    await fetchContent(url, filePath);
    // Small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('Content fetch complete!');
}

main().catch(console.error);

