import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import buildRoutes from './routes'
import mysqlConnection from './utilities/databaseMysql'
import utilityMiddlewares from './middlewares/utility'

const server = express()

/**
 * Configure Server
 */
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(helmet())
server.use(cors())
server.use(utilityMiddlewares)

/**
 * Start's API Server
 * @returns {Promise<import('http').Server>}
 */
function apiServer() {
    return new Promise(resolve => {
        const port = process.env.PORT || 3000
        const api = server.listen(port)

        api.on('listening', () => {
            console.info(`[SERVER] Started on port ${port}`)
            resolve(api)
        })
    })
}

/**
 * Boot Server
 */
async function bootServer() {
    try {
        // Boot Order
        await apiServer()
        await buildRoutes(server)
        await mysqlConnection()

        console.info('[SERVER] Boot up complete.')
    } catch (error) {
        console.error('[SERVER] Crashed:', error)
    }
}

export default bootServer()
