const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeletedBlueprintSchema = new Schema({
  uid: { type: String, required: true, index: true },
  userUid: { type: String, required: true, index: true },
  timestamp: Number,
});

module.exports = mongoose.model('DeletedBlueprint', DeletedBlueprintSchema);
