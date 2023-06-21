// import connectMongo from "@/database/db";
// import { getUsers,postUser } from "@/database/controller";
// export default function handler(req: any, res: any) {
//   connectMongo().catch(()=>res.status(405).json({error:"Error in connection"}));

//   //type of request
//   const { method } = req;

//   switch (method) {
//     case "GET":
//         getUsers(req,res)
//       break;
//     case "POST":
//       postUser(req,res)
//       break;
//     case "PUT":
//       res.status(200).json({ method, name: "PUT request" });
//       break;
//     case "DELETE":
//       res.status(200).json({ method, name: "DELETE request" });
//       break;
//     default:
//         res.setHeader('Allow',['GET','POST','PUT','DELETE']);
//         res.status(405).end(`Method ${method} Not Allowed`)
//   }

//   res.status(200).json({ name: "John Doe 3" });
// }




import connectMongo from "@/database/db";
import { getUsers, postUser, putUser } from "@/database/controller";

export default async function handler(req: any, res: any) {
  try {
    await connectMongo(); // Wait for the MongoDB connection to be established

    // Type of request
    const { method } = req;

    switch (method) {
      case "GET":
        getUsers(req, res);
        break;
      case "POST":
        postUser(req, res);
        break;
      case "PUT":
        putUser(req,res);
        break;
      case "DELETE":
        res.status(200).json({ method, name: "DELETE request" });
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
