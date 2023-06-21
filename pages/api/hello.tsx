import connectMongo from '../../database/db'
export default function handler(req:any,res:any){
    connectMongo();
    res.status(200).json({name:'John Doe'})
}