#!/bin/bash
# TODO: figure out the full sequence of events and then publish this
sudo npm install -g serve
serve -s build
cd build
git init
git remote add origin git@github.com:largerock/largerock.github.io
git add -A
git commit -m "New prod release of largerock.com"
git push -f
cd ../
rm -rf build