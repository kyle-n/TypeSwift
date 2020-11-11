#!/bin/bash
newline=$'\n'

# Remove previous content
sed -i '/^###\sFeatures/,/^#/{/^#/!d}' README.md

# Grab line number of features section
features_line_number=$(grep -n '### Features' README.md | cut -d: -f 1)
features_line_number=$((features_line_number+1))

code_header='```typescript'
code_footer='```'
sed -i "${features_line_number}i ${newline}" README.md

for class in 'Boolean' 'Number' 'String' 'Array' 'Object'
do
  # Blank lines around section
  sed -i "${features_line_number}i ${newline}" README.md
  next_line=$((features_line_number+1))

  # file output
  file="src/${class}.ts"
  content=$(sed -n '/^export {}/,/^Object\.defineProperties/p;/^Object\.defineProperties/q' $file | tail -n +2 | head -n -2)
  formatted_content=$(echo -e "${content}\n" | sed ':a $!{N; ba}; s/\n/\\n/g')

  # Wrap header declaration and insert into README
  insertion=$(sed -i "${next_line}i ${code_header}${formatted_content}${code_footer}" README.md)
done
