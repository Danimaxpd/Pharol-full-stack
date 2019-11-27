import * as Joi from '@hapi/joi';

export const userValidation = Joi.object({
    rut: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    rutChilen: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    phone: Joi.number()
    .positive()
    .integer()
    .min(1000000)
    .max(9999999)
    .required(),

    gender: Joi.string()
    .allow('F', 'M')
    .required(),

    address: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    numberAddress: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
});

export const optionalUserValidation = Joi.object({
    rut: Joi.string()
    .alphanum()
    .min(3)
    .max(30),

    rutChilen: Joi.string()
    .alphanum()
    .min(3)
    .max(30),

    name: Joi.string()
    .alphanum()
    .min(3)
    .max(30),

    lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30),

    phone: Joi.number()
    .positive()
    .integer()
    .min(1000000)
    .max(9999999),

    gender: Joi.string()
    .allow('F', 'M'),

    address: Joi.string()
    .alphanum()
    .min(3)
    .max(30),

    numberAddress: Joi.string()
    .alphanum()
    .min(3)
    .max(30),
});
