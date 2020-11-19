#!/bin/bash
echo
echo A product by the XtendOps DEV Team
echo https://developers.xtendops.us
echo

# pull latest changes
git pull

# install dependencies
npm install

# build
npm run build

# restart pm2
pm2 restart developers
