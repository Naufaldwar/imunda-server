const { Schema, model } = require("mongoose");

const ListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  name_product: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const List = model("list", ListSchema);

module.exports = List;
