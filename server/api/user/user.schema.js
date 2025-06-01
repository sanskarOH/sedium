import Joi, {joi} from 'joi'

export const userSchema = Joi.object({

    name: Joi
        .string()
        .required()
        .min(3)
        .max(50),

    username: Joi
        .string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),

    email: Joi
        .string()
        .email()
        .required(),

    
    password: Joi
        .string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        
        

})