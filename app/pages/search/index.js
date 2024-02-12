import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

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
        <>
        {
            loading
            ? 
            <>
            loading data
            </>
            : 
            <>
            {JSON.stringify(response)}
            </>
        }
        </>
    )
}