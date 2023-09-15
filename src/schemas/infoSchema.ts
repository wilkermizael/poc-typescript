import Joi from "joi"
import { CreateInfo, InfoTask } from "protocols/infoProtocols"

const infoTaskSchema = Joi.object<CreateInfo>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.date().iso().required,
    amenable: Joi.string().required(),
    status: Joi.boolean().required()

})