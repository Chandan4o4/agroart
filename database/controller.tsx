/** Controller */
import Users from "@/model/user";
import mongoose from "mongoose";

//get:http://localhost:3000/api/users
export async function getUsers(req: any, res: any) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data Not Found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

//post: http://localhost:3000/api/users
// export async function postUser(req:any,res:any) {
// try{
// const formData=req.body;
// if(!formData)return res.status(404).json({error:"Form Data Not Provided...!"});
// Users.create(formData,function(err:any,data:any){
//     return res.status(200).json(data)
// })
// }catch(error){
//     return res.status(404).json({error})
// }
// }

export async function postUser(req: any, res: any) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    }

    if (mongoose.connection.readyState !== 1) {
      throw new Error("MongoDB connection not established");
    }

    // Create a new user using the Users model/schema
    const newUser = new Users(formData);
    const data = await newUser.save();

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

//put: http://localhost:3000/api/users/1
export async function putUser(req: any, res: any) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(formData);
    }
    res.status(404).json({ error: "user not selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data" });
  }
  
}
