import { Router } from 'express'
import _ from 'lodash'

const router = Router()

router.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

export default router
