import mongoose from 'mongoose'

const user = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true, unique: true },
  saved_games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SavedGame' }],
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export default mongoose.model('User', user)
