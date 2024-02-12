import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function SearchPage() {
    const search = useSearchParams();
    const router = useRouter();
    const searchQuery = search.get('q');
    const encodedSearchQuery = encodeURI(searchQuery || "");
    useEffect(() => {
        const fetchSearch = async () => {
            const response = await fetch(`/api/search?q=${encodedSearchQuery}`);
            const res = await response.json();
            console.log(res);
        }
        fetchSearch();
    }, [])
    return (
        <>
        work in progress search page
        </>
    )
}