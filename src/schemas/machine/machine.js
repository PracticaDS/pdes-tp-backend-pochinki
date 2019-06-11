import mongoose from 'mongoose'

const machine = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  x: Number,
  y: Number,
  type: String,
  recurso: String,
  orientacion: String,
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export default mongoose.model('Machine', machine)
