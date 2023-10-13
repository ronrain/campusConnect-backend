import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookingSchema = new Schema({
  date: Date,
  price: {
    type: Number,  // todoo: check only possitive vals
    required: true,
  },
  service: { type: Schema.Types.ObjectId, ref: 'Service' },
  customer: { type: Schema.Types.ObjectId, ref: 'Profile' },
  
},{
  timestamps: true,
})

const Booking = mongoose.model('Booking', bookingSchema)

export { Booking }
