import { Router } from 'express'
import mongoose from 'mongoose'
import saves from '../schemas/saved_game/saved_game'

const router = Router()

router.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

router.get('/saved_games/:id', async (req, res) => {
  const result = await saves.findById(req.params.id)
  res.send(result)
})


export default router;
