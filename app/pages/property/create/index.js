import Layout from "@/components/Layout"
import { useSession } from "next-auth/react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function CreatePage() {
    const { data: session, status } = useSession();
    const [ loading, setLoading ] = useState();
    const [ type, setType ] = useState();
    const [ price, setPrice ] = useState();
    const [ location, setLocation ] = useState();
    const [ response, setResponse ] = useState();
    const createProperty = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('/api/property/create', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                type:type,
                price:price,
                location:location
            })
        })
        const res = await response.json();
        setLoading(false);
        setResponse(res.message);
    }
    return (
        <>
        <Layout session={session}>
        <br />
        <h2 className="font-bold text-2xl">Temprorary post creation page</h2>
        <br />
        <div className='w-1/2'>
        <form onSubmit={createProperty}>
            <Input type='number' value={price} onChange={((e) => {setPrice(e.target.value)})} placeholder='price of property' />
            <br />
            <Input value={type} onChange={((e) => {setType(e.target.value)})} placeholder='Villa, apartment, townhouse etc.' />
            <br />
            <Input value={location} onChange={((e) => {setLocation(e.target.value)})} placeholder='New Cairo, Rehab City' />
            { 
            loading 
            ? 
            <>
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Post Property
            </Button>
            </>
            : 
            <>
            <Button>
            Post Property
            </Button>
            </>
            }
        </form>
        </div>
        </Layout>
        </>
    )
}