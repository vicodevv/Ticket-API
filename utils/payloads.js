import mongoose from 'mongoose';

export const userPayload = {
    firstname: 'John',
    lastname: 'Doe',
    country: 'Nigeria',
    email: 'johndoe@test.com',
    password: '123456',
    _id: new mongoose.Types.ObjectId().toString(),
}