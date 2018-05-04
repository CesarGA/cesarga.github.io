#! /bin/bash

rm -rf ./dist
rm -f ./index.html
rm -f ./404.html

cp -rf ./blog/.vuepress/dist/* .