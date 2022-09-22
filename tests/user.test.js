import supertest from 'supertest';
import User from '../models/User'; // import the model
import mongoose from 'mongoose';

const app = createServer(); // create the server

describe ('Users', () => {
    beforeEach((done) =>{
        mongoose.connection.collections.users.drop(() => {
            done();
        })
    })

})