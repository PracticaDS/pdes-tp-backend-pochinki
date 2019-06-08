import mongoose from 'mongoose'

const factory = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  factory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Machine' }],
  size: { x: Number, y: Number },
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export default mongoose.model('Factory', factory)
