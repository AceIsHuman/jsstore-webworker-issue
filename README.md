## JsStore Web Worker Issue

Here is a simple example of an issue encountered when attempting to intialize a database using a web worker. The logic for intializing the database can be found in `src/service/connection.js`. The function `initJsStore` is exported from this file into `src/App.vue`. Once the database is loaded, the render should update from 'Loading database...' to 'Database loaded.'

To get started simply run:
```
npm install

npm run dev
```

#### Technologies
- Vue: 2.7.7
- Vue/Cli-Service: 4.5.13
- Electron: 20.3.3
- Electron-Builder(Vue-Cli-Plugin): 2.1.1

A discussion for this topic has been opened here:
https://github.com/ujjwalguptaofficial/JsStore/discussions/296
