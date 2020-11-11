features_line_number=$(grep -n '### Features' README.md | cut -d: -f 1)

object_output=$(sed -n '/^export {}/,/^Object\.defineProperties/p;/^Object\.defineProperties/q' src/Object.ts | sed -n '1,2!p')
echo "$object_output"
