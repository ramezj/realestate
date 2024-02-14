import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { PropertyCard } from "@/components/PropertyCard";
import Layout from "@/components/Layout";

export default function SearchPage() {
    const [ loading, setLoading ] = useState(true);
    const [ response, setResponse ] = useState();
    const search = useSearchParams();
    const searchQuery = search.get('q');
    const encodedSearchQuery = encodeURI(searchQuery || "");
    useEffect(() => {
        const fetchSearch = async () => {
            const response = await fetch(`/api/search?q=${encodedSearchQuery}`);
            const res = await response.json();
            setResponse(res);
            setLoading(false);
            console.log(res);
        }
        fetchSearch();
    }, [])
    return (
        <Layout>
        <div className="flex flex-wrap gap-8 justify-center w-full">
        <PropertyCard title='test hello world' />
        <PropertyCard title='test hello world' />
        <PropertyCard title='test hello world' />
        <PropertyCard title='test hello world' />
        </div>
        </Layout>
    )
}