import mongoose from 'mongoose'

const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    descriptrion: {
        type: String,
        required: true,
        unique: true,
    },
    distance: {
        type: Number,
    },
});

export default mongoose.model('Trip', tripSchema);
