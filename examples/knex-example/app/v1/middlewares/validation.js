import schema from '../schema'
import Joi from 'joi'

export default function (req, res, next) {
    Joi.validate(req.body, schema, {abortEarly: false}, function(err, value) {
        if(err) {
            let dataError = {}

            err.details.forEach((detail) => {
                dataError[detail.context.key] = detail.message
            })

            res.send({
                error: {
                    dataError
                }
            })
        } else {
            next()
        }
    })
}
