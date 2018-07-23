import express from 'express'
import bodyParser from 'body-parser'

import routers from './v1/routers'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api/v1/contacts', routers)

app.listen(3000, () => console.log('Boilerplate app listening on port 3000!'))
