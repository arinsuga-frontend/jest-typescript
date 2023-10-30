# jest-typescript
Jest using typescript

Cara 1: via ts-jest
===========
1. Create basic package.json
    $ npm init -y
2. Install Jest
    $ npm i -D jest
3. Install ts-jest
    $ npm i -D ts-jest
4. create basic configurasi jest.config.js
    $ npx ts-jest config:init
5. Install Type Definition @types/jest
    $ npm i -D @type/jest
6. Selesai
    Sudah bisa menggunakan jest dengan bahasa typescript

Cara 2: via babel
===========
1. Create basic package.json
    $ npm init -y
2. Install Jest
    $ npm i -D jest
3. Install babel dan babel-jest
    $ npm i -D babel-jest @babel/core @babel/preset-env @babel/preset-typescript
4. Buat babel config file: babel.config.json
    {
        "presets": [
            ["@babel/preset-env", {"targets": {"node": "current"}}],
            "@babel/preset-typescript"
        ]
    }
5. Install Type definitions
    $ install i -D @types/jest
6. Selesai
    Sudah bisa menggunakan jest dengan bahasa typescript
