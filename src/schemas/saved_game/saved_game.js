import mongoose from 'mongoose'

const savedGame = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  factory: { type: mongoose.Schema.Types.ObjectId, ref: 'Factory' },
  total_amount: Number,
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export default mongoose.model('SavedGame', savedGame)
