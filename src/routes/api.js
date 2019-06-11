import { Router } from 'express'
import _ from 'lodash'
import mongoose from 'mongoose'
import users from '../schemas/user/user_schema'

const router = Router()

function validate(condition, message) {
  return (req, res, next) => {
    if (!condition(req, res)) {
      res.status(400).json({ status: 'error', message })
    } else {
      next();
    }
  }
}


router.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

router.get('/users', async (req, res) => {
  const result = await users.find({})
  res.send(result)
})

router.get('/users/:id', async (req, res) => {
  const user = await users.findById(req.params.id)
  if (!user) res.status(404).json({ status: 'not-found' })
  res.json(user)
})

router.get('/users/auth/:username', async (req, res) => {
  const user = await users.find({}, { username: req.params.username })
  if (!user) res.status(404).json({ status: 'not-found' })
  res.json(user)
})

router.post('/users',
  async (req, res) => {
    const User = mongoose.model('User')
    const newUsr = new User(req.body)
    await res.json(newUsr.save())
  }
)

router.put('/users/:id', async (req, res) => {
  await users.updateOne({ _id: req.params.id }, { $set: req.body })
  res.status(200).json({ status: 'OK' })
})

router.delete('/users/:id', async (req, res) => {
  const user = await users.findById(req.params.id)
  if (!user) res.status(404).json({ status: 'not-found' })
  await user.remove()
  res.json({ status: 'OK' })
})

export default router
