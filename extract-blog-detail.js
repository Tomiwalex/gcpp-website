const fs = require('fs');

function extractText(node, texts = []) {
    if (node.type === 'TEXT' && node.text && node.text.content) {
        // try to get font size or weight to distinguish headings
        let style = '';
        if (node.text.fontSize) style += `[${node.text.fontSize}px] `;
        if (node.text.fontWeight) style += `[${node.text.fontWeight}] `;

        texts.push(`${style}${node.text.content.replace(/\n/g, ' ')}`);
    }
    if (node.children) {
        node.children.forEach(child => extractText(child, texts));
    }
    return texts;
}

try {
    const data = JSON.parse(fs.readFileSync('src/app/blog-detail.txt', 'utf8'));
    let texts = [];
    if (Array.isArray(data)) {
        data.forEach(node => extractText(node, texts));
    } else {
        extractText(data, texts);
    }
    fs.writeFileSync('extracted-blog-detail.txt', texts.join('\n'));
    console.log('Extraction complete. Saved to extracted-blog-detail.txt');
} catch (e) {
    console.error("Failed to parse JSON", e);
}
