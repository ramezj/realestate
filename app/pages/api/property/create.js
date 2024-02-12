import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { prisma } from "@/lib/db";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        return res.status(400).json({message:'Hello not user.'})
    }
    res.status(200).json({message:session});
}