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
    it('should list a user on /user/<id>GET', (done) =>{
        const newUser = new User(userPayload)

        newUser.save().then(() => {
            newUser.save().then(() => {
                supertest(app)
                .get(`/user/${newUser._id}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res.statusCode).toBe(200);
            })
        })
    })
})