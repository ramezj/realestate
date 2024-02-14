import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { PropertyCard } from "@/components/PropertyCard";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
    const router = useRouter();
    const [ searchQ, setSearchQ ] = useState("");
    const { data: session, status } = useSession()
    const [ loading, setLoading ] = useState(true);
    const [ response, setResponse ] = useState();
    const [ properties, setProperties ] = useState();
    const onSearch = (e) => {
        e.preventDefault();
        const encodedSearchQuery = encodeURI(searchQ);
        router.push(`/search?q=${encodedSearchQuery}`)
    }
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
            <br />
            <center>
                <div className="md:w-3/4 mt-8">
                <form onSubmit={onSearch}>
                <SearchBar value={searchQ} onChange={((e) => { setSearchQ(e.target.value)})} />
                <br />
                <Button type='submit' className='w-[15rem]'>
                Find your new home
                </Button>
                </form>
                </div>
            </center>
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