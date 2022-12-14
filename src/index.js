import express from 'express'
import { Router } from 'express'

const app = express()

const route = Router()

route.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "Sucesso"
    })
})

app.use(route)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server running in ' + port)
})