import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { PropertyCard } from "@/components/PropertyCard";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function SearchPage() {
    const { data: session, status } = useSession()
    const [ loading, setLoading ] = useState(true);
    const [ response, setResponse ] = useState();
    const [ properties, setProperties ] = useState();
    const search = useSearchParams();
    const searchQuery = search.get('q');
    const encodedSearchQuery = encodeURI(searchQuery || "");
    useEffect(() => {
        const fetchSearch = async () => {
            const response = await fetch(`/api/search?q=${encodedSearchQuery}`);
            const res = await response.json();
            setResponse(res);
            setProperties(res.properties);
            setLoading(false);
            console.log(res);
        }
        fetchSearch();
    }, [])
    return (
        <Layout session={session}>
        <div className="flex flex-wrap gap-8 justify-center w-full">
        { 
        loading 
        ? 
        <>
        <p>loading data</p>
        </>
        : 
        <>
        {properties.map((property) => {
            return (
                <>
                <PropertyCard price={property.price} location={property.location}/>
                </>
            )
        })}
        </>
        }
        </div>
        </Layout>
    )
}