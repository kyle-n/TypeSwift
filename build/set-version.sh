SCRIPTPATH="$(cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P)"
cd "$SCRIPTPATH"
cd ..
./build/update-readme.sh
git add README.md
git commit -m "Updates README"
npm version $1
