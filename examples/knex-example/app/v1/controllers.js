import { knex } from '../config'

export default class Controllers {

    async index(req, res) {
        try {
            const data = await knex('contacts')
                .select('name', 'address')

            res.send(data)
        } catch(e) {
            res.send(e)
        }
    }

    async show(req, res) {
        try {
            const data = await knex('contacts')
                .select('name', 'address')
                .where({id: req.params.id})

            res.send(data)
        } catch(e) {
            res.send(e)
        }
    }

    async create(req, res) {
        try {
            const data = await knex('contacts')
                .insert(req.body)

            res.send({
                id: data[0]
            })
        } catch(e) {
            res.send(e)
        }
    }

    async delete(req, res) {
        try {
            const data = await knex('contacts')
                .where({id: req.params.id})
                .del()

            res.send({
                success: data
            })
        } catch(e) {
            res.send(e)
        }
    }

    async update(req, res) {
        try {
            const data = await knex('contacts')
                .where({id: req.params.id})
                .update(req.body)

            res.send({
                success: data
            })
        } catch(e) {
            res.send(e)
        }
    }

}
