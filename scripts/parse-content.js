import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content');
const outputDir = path.join(__dirname, '../src/content/parsed');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function extractMainContent(html) {
  // Try to find the main content area
  // Common WordPress/Avada selectors
  const mainContentSelectors = [
    'main#main',
    '.fusion-page-title-bar',
    '.fusion-page-title-captions',
    '.post-content',
    '.entry-content',
    '#content',
    '.content',
    'article',
    '.fusion-layout-column',
    '.fusion-builder-row',
  ];

  // Extract title
  let title = '';
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) {
    title = titleMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }

  // Try to extract content between body tags
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    return { title, content: html };
  }

  let bodyContent = bodyMatch[1];

  // Remove scripts
  bodyContent = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  
  // Remove styles
  bodyContent = bodyContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Remove comments
  bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, '');

  // Try to find main content wrapper
  const mainMatch = bodyContent.match(/<main[^>]*id="main"[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    bodyContent = mainMatch[1];
  }

  // Clean up common WordPress/Avada wrappers but keep content
  // Remove header and footer if present
  bodyContent = bodyContent.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
  bodyContent = bodyContent.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');

  // Convert relative URLs to absolute for images and links
  bodyContent = bodyContent.replace(/src="\//g, 'src="https://www.exfreight.com/');
  bodyContent = bodyContent.replace(/href="\//g, 'href="https://www.exfreight.com/');

  return { title, content: bodyContent.trim() };
}

function processFile(filePath, outputPath) {
  try {
    const html = fs.readFileSync(filePath, 'utf-8');
    const { title, content } = extractMainContent(html);
    
    const result = {
      title,
      content,
      originalUrl: filePath.replace(contentDir, '').replace('.html', ''),
    };

    // Ensure output directory exists
    const outputFileDir = path.dirname(outputPath);
    if (!fs.existsSync(outputFileDir)) {
      fs.mkdirSync(outputFileDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`Processed: ${filePath} -> ${outputPath}`);
    
    return result;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  files.forEach((file) => {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      processDirectory(filePath);
    } else if (file.name.endsWith('.html')) {
      const relativePath = path.relative(contentDir, filePath);
      const outputPath = path.join(outputDir, relativePath.replace('.html', '.json'));
      processFile(filePath, outputPath);
    }
  });
}

console.log('Starting content parsing...');
processDirectory(contentDir);
console.log('Content parsing complete!');

