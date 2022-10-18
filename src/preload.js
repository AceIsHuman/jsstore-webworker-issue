const { contextBridge } = require('electron')

// Get Web Worker Path for JSStore
contextBridge.exposeInMainWorld('jsstore', {
  getWorker: () => {
    let path
    // return dev build when env is development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      path = require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js').default
    } else { // return prod build when env is production
      // eslint-disable-next-line
      path = require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js').default
    }

    return path
  }
})
