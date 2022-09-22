const Event = require('../models/event');
const router = require('express').Router();

router.post('/create', async(req, res)=>{
    const {name, location, description, type, startDate, endDate} = req.body

    try {
        const newEvent = new Event({
            name,
            location,
            description,
            type,
            startDate,
            endDate,
        })
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (err) {
        console.log(err)
        res.status(500).json('Error creating an event')
    }
})

module.exports = router;