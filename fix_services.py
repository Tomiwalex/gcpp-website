
import os

filepath = r'c:\Users\tobex_up2urbp\Documents\gcpp-website\src\components\screens\homepage\AuthorsServices.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if 'services.solutions.services.map' in line:
        new_lines.append('              {services.solutions.services.map((service, index) => {\n')
        new_lines.append('                const isObject = typeof service !== \'string\' && service !== null;\n')
        new_lines.append('                const name = isObject ? (service as any).name : (service as string);\n')
        new_lines.append('                const href = isObject ? (service as any).href : \'#\';\n')
        new_lines.append('                return (\n')
        new_lines.append('                  <Link\n')
        new_lines.append('                    href={href}\n')
        new_lines.append('                    key={index}\n')
        new_lines.append('                    className="flex w-full items-center justify-center gap-2 rounded bg-[#F9F9F9] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] lg:text-lg"\n')
        new_lines.append('                  >\n')
        new_lines.append('                    {name} <Icon icon="radix-icons:arrow-top-right" />\n')
        new_lines.append('                  </Link>\n')
        new_lines.append('                );\n')
        new_lines.append('              })}\n')
        skip = True
    elif skip and '</div>' in line:
        new_lines.append(line)
        skip = False
    elif not skip:
        new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
