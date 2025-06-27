const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
  shortCode : { type: String, required: true, unique: true },  // -> cleint
  longUrl: { type: String, required: true },  // url -> client.req
  validity : Number, // -> cleint
  createdTime: { type: Date, default: Date.now },  // -> server
  clicks: { type: Number, default: 0 }  // -> incremented when called
});

export default mongoose.model("Url", urlSchema);
