import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { prisma } from "@/lib/db";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        return res.status(401).json({
            ok:false,
            message:'not authenticated'
        })
    };
    const { type, price, location } = req.body;
    if( !type || !price || !location ) {
        return res.status(400).json({
            ok:false,
            message:'fields missing'
        })
    }
    if(typeof type != string || typeof price != Number || typeof location != string) {
        return res.status(400).json({
            ok:false,
            message:'typeof incorrect'
        })
    }
    // creating new property in db.
    try {
        const property = await prisma.property.create({
            data: {
                type:type,
                price:price,
                location:location,
                userId: session.user.id
            }
        });
        return res.status(200).json({
            ok:true,
            message:'Property created successfully'
        })
    } catch (error) {
        return res.status(400).json({
            ok:false,
            message:error
        })
    }
}