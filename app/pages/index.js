import Layout from "@/components/Layout";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession()
  const [ searchQuery, setSearchQuery ] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`)
    console.log('query :', encodedSearchQuery);
  }
  return (
    <>
    <Layout session={session}>
      <center>
          <h1 className="font-bold text-4xl mt-16">
            Ideal Real Estate Matches for Everybody, Everywhere.
          </h1>
        <div className="2xl:w-1/3 lg:w-1/2 md:w-1/2 w-3/4 mt-16">
          <form onSubmit={onSearch}>
            <SearchBar value={searchQuery} onChange={((e) => { setSearchQuery(e.target.value)})} />
            <br />
            <Button type='submit' className='w-[22rem]'>
              Find your new home
            </Button>
          </form>
        </div>
      </center>
    </Layout>
    </>
  );
}
