import mongoose from 'mongoose'

const savedGame = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  factory: [],
  size_x: Number,
  size_y: Number,
  total_amount: Number,
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export default mongoose.model('SavedGame', savedGame)
