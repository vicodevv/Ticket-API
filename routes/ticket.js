const Ticket = require("../models/ticket");
const router = require("express").Router();

router.post('/create', async(req, res) =>{
    const {name, description, type, amount, price} = req.body

    try {
        const newTicket = new Ticket({
            name,
            description,
            type,
            amount,
            price,
        })
        await newTicket.save()
        res.status(201).json(newTicket)
    } catch (err) {
        console.log(err)
        res.status(500).json('Error creating a ticket')
    }
})

module.exports = router;