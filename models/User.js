import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    email: { type: String, required: true, trim: true },
    fullName: { type: String, required: true, trim: true },
});

export default model('user', userSchema);
