const mongoose = require('mongoose');

// Define the schema
const landSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  landId: {
    type: Number,
    required: true
  },
  landUseType: {
    type: String,
    required: true
  },
  allottee: {
    type: String,
    required: true
  },
  locality: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

landSchema.index({ location: '2dsphere' }); // Create a geospatial index on the location field

// Create a model based on the schema
const Land = mongoose.model('Land', landSchema);


module.exports = Land;