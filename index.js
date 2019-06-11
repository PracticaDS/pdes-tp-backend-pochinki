import mongoose from 'mongoose'
import app from './src/server'
import User from './src/schemas/user/user_schema'

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3001

const models = { User };

const seed = async () => {
  await models.User.deleteMany({})
  const user1 = new models.User({
    username: 'ggwp',
    saved_games: []
  });

  await user1.save();
};

const connectDb = () => {
  return mongoose.connect('mongodb://localhost/factorio');
};

connectDb().then(async () => {
  seed()
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`)
  })
})
