import { model, Schema } from 'mongoose';
import { emailValidator } from '../utilities/validators';

const userSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: emailValidator,
            message: props => props.value + 'is not a valid email address',
        },
    },
    password: { type: String, required: true, trim: true },
});

export default model('user', userSchema);
