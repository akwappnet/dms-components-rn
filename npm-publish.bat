@echo off
rmdir /s /q lib
tsc -p tsconfig.json

rem Copy .svg files
for %%i in (src\assets\*.*) do xcopy "%%i" "lib\cjs\assets" /y

rem Copy package.json
copy package.json lib\package.json

rem Copy package1.json to package.json
copy package1.json package.json

rem Final copy command for assets and package.json
xcopy src\assets\* lib\cjs /s /e /y && copy package.json lib\package.json
