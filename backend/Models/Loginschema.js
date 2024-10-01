
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    Name: { type: String},
    Phone: { type: String },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, { versionKey: false });

const Loginsche = mongoose.model('Loginsche', loginSchema);

module.exports = Loginsche;