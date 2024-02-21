#!/bin/bash

cd sleepyswords.github.io &&
ls | grep -xv "file.txt" | xargs rm &&
cd ../ &&
yarn build &&
cp -r out/* ./sleepyswords.github.io/
