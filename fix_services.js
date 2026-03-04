
const fs = require('fs');
const path = require('path');

const filepath = 'c:\\Users\\tobex_up2urbp\\Documents\\gcpp-website\\src\\components\\screens\\homepage\\AuthorsServices.tsx';

let content = fs.readFileSync(filepath, 'utf8');
const lines = content.split('\n');
const newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('services.solutions.services.map')) {
        newLines.push('              {services.solutions.services.map((service, index) => {');
        newLines.push('                const isObject = typeof service !== \'string\' && service !== null;');
        newLines.push('                const name = isObject ? (service as any).name : (service as string);');
        newLines.push('                const href = isObject ? (service as any).href : \'#\';');
        newLines.push('                return (');
        newLines.push('                  <Link');
        newLines.push('                    href={href}');
        newLines.push('                    key={index}');
        newLines.push('                    className="flex w-full items-center justify-center gap-2 rounded bg-[#F9F9F9] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] lg:text-lg"');
        newLines.push('                  >');
        newLines.push('                    {name} <Icon icon="radix-icons:arrow-top-right" />');
        newLines.push('                  </Link>');
        newLines.push('                );');
        newLines.push('              })}');
        skip = true;
    } else if (skip && line.includes('</div>')) {
        newLines.push(line);
        skip = false;
    } else if (!skip) {
        newLines.push(line);
    }
}

fs.writeFileSync(filepath, newLines.join('\n'));
console.log('Fixed AuthorsServices.tsx');
