import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    service: {
      type: String,
    },
    location: {
      type: String,
    },
    siteArea: {
      type: String,
    },
    projectType: {
      type: String,
    },
    buildUpArea: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
