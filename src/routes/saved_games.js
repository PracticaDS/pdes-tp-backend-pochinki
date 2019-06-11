import { Router } from 'express'
import mongoose from 'mongoose'
import saves from '../schemas/saved_game/saved_game'
import users from '../schemas/user/user_schema'

const router = Router()

router.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

router.get('/saved_games/:id', async (req, res) => {
  const result = await saves.findById(req.params.id)
  res.send(result)
})

router.post('/saved_games/:id', async (req, res) => {
  const user = await users.findById(req.params.id)
  const SavedGame = mongoose.model('SavedGame')
  const newSave = new SavedGame(req.body)
  await newSave.save()
  user.saved_games.push(newSave)
  await users.updateOne({ _id: req.params.id }, { $set: user })
  res.status(200).json({ status: 'OK' })
})

router.put('/saved_games/:id', async (req, res) => {
  await users.updateOne({ _id: req.params.id }, { $set: req.body })
  res.status(200).json({ status: 'OK' })
})

router.get('/saved_games', async (req, res) => {
  const result = await saves.find({})
  res.send(result)
})

export default router;
