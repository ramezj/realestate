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
    const properties = await prisma.property.findMany({
        where: {
            type: {
                search: query.q
            }
        }
    });
    console.log(properties);
}