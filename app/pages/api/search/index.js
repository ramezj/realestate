import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/lib/db";

export default async function handler(req, res) {
    if(req.method === 'POST') {
        return res.status(400).json({
            ok:false,
            message:'invalid request method'
        })
    }
    const query = req.query;
    // const properties = await prisma.property.findMany({
    //     where: {
    //         type: {
    //             search: query.q
    //         }
    //     }
    // });
    const properties = await prisma.property.findMany({
        where: {
          OR: [
            { type: { contains: query.q, mode: 'insensitive' } },
            { location: { contains: query.q, mode: 'insensitive' } }
          ]
        }
      });
    
    if(!properties) {
        return res.status(400).json({
            ok:false,
            message:'no properties found'
        })
    };
    res.status(200).json({
        ok:true,
        properties:properties
    })
}