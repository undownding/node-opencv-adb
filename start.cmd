@echo off
cd /d "%~dp0"
shutdown -s -t 13320
wsl /home/undownding/.nvm/versions/node/v12.4.0/bin/babel-node ./main.js