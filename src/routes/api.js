import { Router } from 'express'
import _ from 'lodash'
import users from '../users/users'

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


function findUser(id, res, ifFound) {
  const user = users.get(id);
  if (!user) res.status(404).json({ status: 'not-found' })
  ifFound(user)
}

router.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

router.get('/users', (req, res) => {
  res.json(users.getAll())
})

router.get('/users/:id', (req, res) => {
  findUser(req.params.id, res, user => res.json(user))
})

router.post('/users', [
  (req, res) => res.json(users.add(req.body))
])

router.put('/users/:id', [
  (req, res) => findUser(req.params.id, res, () => res.json(users.update(req.params.id, req.body)))
])

router.delete('/users', (req, res) => {
  users.clear();
  res.json(users.getAll());
})

export default router
