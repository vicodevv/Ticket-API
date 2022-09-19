import { Ticket } from '../models/ticket'

export const createTicket = async(req, res) => {
    const {name, description, type, limit} = req.body

    try {
        const newTicket = new Ticket({
            name,
            description,
            type,
            limit
        })
    } catch (err) {
        console.log(err)
        res.status(500).json('Error creating a ticket')
    }
}