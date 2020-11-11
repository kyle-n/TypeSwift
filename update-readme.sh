newline=$'\n'

# Remove previous content
sed -i '/^###\sFeatures/,/^#/{/^#/!d}' README.md

# Grab line number of features section
features_line_number=$(grep -n '### Features' README.md | cut -d: -f 1)
features_line_number=$((features_line_number+1))

# Object output
object_output=$(sed -n '/^export {}/,/^Object\.defineProperties/p;/^Object\.defineProperties/q' src/Object.ts | tail -n +2 | head -n -2)
obj=$(echo -e "${object_output}\n" | sed ':a $!{N; ba}; s/\n/\\n/g')

# Blank lines around section
sed -i "${features_line_number}i ${newline}" README.md
sed -i "${features_line_number}i ${newline}" README.md
next_line=$((features_line_number+1))

# Wrap header declaration and insert into README
code_header='```typescript'
code_footer='```'
insertion=$(sed -i "${next_line}i ${code_header}${obj}${code_footer}" README.md)
#cat README.md
