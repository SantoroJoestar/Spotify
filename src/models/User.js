const mongoose = require('../database/index');

const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

UserSchema.pre("save", async function(next){
    const hash = await bcryptjs.hash(this.password, 10);
    console.log(`Usuário: ${this}`)
    console.log(`Hash de criptografia: ${hash}`);
    this.password = hash;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
