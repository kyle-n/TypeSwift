#!/usr/bin/env bash
newline=$'\n'

# Run self in project root, no matter where script is triggered from
SCRIPTPATH="$(cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P)"
cd "$SCRIPTPATH"
cd ..

# Remove previous content
gsed -i '/^###\sAPI/,/^#/{/^#/!d}' README.md

# Grab line number of api section
api_line_number=$(grep -n '### API' README.md | cut -d: -f 1)
api_line_number=$((api_line_number+1))

code_header='```typescript'
code_footer='```'
gsed -i "${api_line_number}i ${newline}" README.md

for class in 'Boolean' 'Number' 'String' 'Array' 'Object'
do
  # Blank lines around section
  gsed -i "${api_line_number}i ${newline}" README.md
  next_line=$((api_line_number+1))

  # file output
  file="src/${class}.ts"
  content=$(gsed -n '/^export {}/,/^Object\.defineProperties/p;/^Object\.defineProperties/q' $file | gtail -n +2 | ghead -n -2)
  formatted_content=$(echo -e "${content}\n" | gsed ':a $!{N; ba}; s/\n/\\n/g')

  # Wrap header declaration and insert into README
  insertion=$(gsed -i "${next_line}i ${code_header}${formatted_content}${code_footer}" README.md)
done

echo "README updated"
