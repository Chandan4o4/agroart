import {Schema, models, model} from 'mongoose'

const userSchema = new Schema({
    id:Number,
    field: String,
    name: String,
    house: String,
    area: String,
    city:String,
    state:String,
    contact: String,
    aid: String,
    website: String,
    remarks: String,
    date: String,
    interested: String,
    f_date: String,
    timing: String,
    timeline: String,
    catalog: String,
    f_remarks: String
})

const Users = models.user || model('user',userSchema)
export default Users;