import { Schema, model } from 'mongoose';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const jobOpeningSubmissionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

jobOpeningSubmissionSchema.pre('save', function(next) {
    if (this.isModified('cv')) {
        const buffer = Buffer.from(this.cv, 'base64');
        const filePath = join(__dirname, 'uploads', `${this._id}.pdf`); // Change the path and extension as needed
        writeFileSync(filePath, buffer);
        this.cv = filePath;
    }
    next();
});

const JobOpeningSubmission = model('JobOpeningSubmission', jobOpeningSubmissionSchema);

export default JobOpeningSubmission;