const fs = require('fs');
const txt = fs.readFileSync('src/app/blog-detail.txt', 'utf8');
const regex = /"content":\s*"([^"]+)"/g;
let match;
let output = [];
while ((match = regex.exec(txt)) !== null) {
    output.push(match[1]);
}
fs.writeFileSync('extracted-blog-detail.txt', output.join('\n'));
console.log('Done');
