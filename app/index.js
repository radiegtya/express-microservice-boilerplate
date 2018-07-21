import express from 'express'
import bodyParser from 'body-parser'

import routers from './routers'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(routers)

app.listen(3000, () => console.log('Boilerplate app listening on port 3000!'))
