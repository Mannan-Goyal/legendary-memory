const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
      type: String,
      required: true
  },
  empField: {
      type: String,
      required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  empExp: {
    type: Number,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  inputLoc: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  sal: {
    type: Number,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  ld: {
    type: Date,
    required: true
  }
})

const Listing = mongoose.model('Listings', listingSchema)

module.exports = Listing
