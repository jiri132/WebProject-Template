@echo off

:: When you dont have the modules downloaded
IF NOT EXIST node_modules (
    echo "Installing Application"
    npm install typescript
)

:: When you get past installing Start the application
echo "Starting Application"

:: First time having typescript used create the config file and main file
echo "Setting up Typescript"
IF NOT EXIST tsconfig.json (
    npx tsc --init
    tsc src/js/main.ts 
)

:: Starting the file watchers for typescript
echo "Starting typescript watcher"
npx tsc -w