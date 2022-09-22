const Event = require('../models/event');
const router = require('express').Router();
//Creare a new event
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
//Get all Events
router.get('/', async(req, res)=>{
    try {
        const events = await Event.find()
        res.status(200).json(events)
    } catch (err) {
        console.log(err)
        res.status(500).json('Error getting events')
    }
})

//Get a single event
router.get('/:id', async(req, res)=>{
    try {
        const event = await Event.findById(req.params.id)
        res.status(200).json(event)
    } catch (err) {
        console.log(err)
        res.status(500).json('Error getting event')
    }
})

//Update an event
router.put('/:id', async(req, res)=>{
    const {name, location, description, type, startDate, endDate} = req.body
    try {
        const event = await Event.findById(req.params.id)
        if(name){
            event.name = name
        }
        if(location){
            event.location = location
        }
        if(description){
            event.description = description
        }
        if(type){
            event.type = type
        }
        if(startDate){
            event.startDate = startDate
        }
        if(endDate){
            event.endDate = endDate
        }
        await event.save()
        res.status(200).json(event)
    } catch (err) {
        console.log(err)
        res.status(500).json('Error updating event')
    }
})

//Delete an event
router.delete('/:id', async(req, res)=>{
    try {
        const event = await Event.findById(req.params.id)
        await event.delete()
        res.status(200).json('Event deleted successfully')
    } catch (err) {
        console.log(err)
        res.status(500).json('Error deleting event')
    }
})
module.exports = router;