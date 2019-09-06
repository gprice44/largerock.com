#!/bin/bash
set -e

# Build script
# This will build the site and push to the production repo largerock.github.io
# Changes will be made live.

npm run build
cd build
git init
git remote add origin git@github.com:largerock/largerock.github.io
git add -A
git commit -m "New prod release of largerock.com"
git push -f origin master  
cd ../
rm -rf build
 