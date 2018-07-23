import Joi from 'joi'

const schema = {
    name: Joi.string().required(),
    address: Joi.string()
}

export default schema
