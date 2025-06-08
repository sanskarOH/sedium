import Joi from 'joi'

export const blogSchema = Joi.object({
    

    blogTitle   : Joi.stringg().required(),
    
    blogContent : Joi.string().required(),

    blogAuthor  : Joi.string().min(3).max(50).required()
})