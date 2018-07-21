import { Router } from 'express'

import Controllers from './controllers'

const router = Router()
const ctrl = new Controllers()

router.get('/service_name', ctrl.index)
router.post('/service_name', ctrl.create)

router.get('/service_name/:id', ctrl.show)
router.put('/service_name/:id', ctrl.update)
router.delete('/service_name/:id', ctrl.delete)

export default router
