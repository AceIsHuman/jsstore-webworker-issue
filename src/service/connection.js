// connection.js
import { Connection } from 'jsstore'

// worker path is loaded from preload.js
const workerPath = window.jsstore.getWorker()
const jsStoreWorker = new Worker(workerPath)
console.info('Worker Path has been loaded using file-loader. ', workerPath)

export const connection = new Connection(jsStoreWorker)
console.info('Connection has been created.', connection)

export const initJsStore = async () => {
  console.info('Attempting to create/load database')
  const isDbCreated = await connection.initDb(getDatabase())
  console.log(`Database successfully ${ isDbCreated ? 'created' : 'loaded' }.`)
}

// Example Database
const getDatabase = () => ({
  name: 'Database',
  version: 1,
  tables: [
    {
      name: 'example',
      columns: {
        id: {
          primaryKey: true,
          autoIncrement: true
        }
      }
    }
  ]
})