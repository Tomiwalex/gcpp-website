const fs = require('fs');
const txt = fs.readFileSync('src/app/meet-leon-card.txt', 'utf8');
const regex = /"content":\s*"([^"]+)"/g;
let match;
let output = [];
while ((match = regex.exec(txt)) !== null) {
    output.push(match[1]);
}
fs.writeFileSync('extracted-leon.txt', output.join('\n'));
