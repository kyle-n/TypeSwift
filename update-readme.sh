newline=$'\n'

features_line_number=$(grep -n '### Features' README.md | cut -d: -f 1)
features_line_number=$((features_line_number+1))

object_output=$(sed -n '/^export {}/,/^Object\.defineProperties/p;/^Object\.defineProperties/q' src/Object.ts | tail -n +2 | head -n -2)
obj=$(echo -e "${object_output}\n" | sed ':a $!{N; ba}; s/\n/\\n/g')

sed -i "${features_line_number}i ${newline}" README.md
next_line=$((features_line_number+1))

code_header='```typescript'
code_footer='```'
insertion=$(sed -i "${next_line}i ${code_header}${obj}${code_footer}" README.md)
#cat README.md
