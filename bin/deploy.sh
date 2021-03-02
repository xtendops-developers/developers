#!/bin/bash
echo
echo A product by the XtendOps DEV Team
echo https://developers.xtendops.com
echo

git checkout .
git checkout master
git pull

# install dependencies
npm install

# build
npm run build