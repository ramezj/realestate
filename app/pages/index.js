import Layout from "@/components/Layout";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage
} from "@/components/ui/card"


export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession()
  const [ searchQuery, setSearchQuery ] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`)
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
            <Button type='submit' className='w-[20rem]'>
              Find your new home
            </Button>
          </form>
        </div>
      </center>
      <div className="flex flex-wrap gap-8 justify-center w-full mt-6">
      <Card>
  <CardHeader>
    <CardTitle>Real Estate Ad</CardTitle>
  </CardHeader>
  <CardImage src="https://bayut-eg-production.s3.amazonaws.com/thumbnails/14335834-800x600.webp" alt="Real Estate Ad" />
  <CardContent>
    <CardDescription>
      Explore this beautiful property with stunning views. Spacious rooms, modern amenities, and more!
    </CardDescription>
  </CardContent>
  <CardFooter>
    <Button type='' className='w-[18rem]'>
      Learn more
    </Button>
  </CardFooter>
</Card>
<Card>
  <CardHeader>
    <CardTitle>Real Estate Ad</CardTitle>
  </CardHeader>
  <CardImage src="https://bayut-eg-production.s3.amazonaws.com/thumbnails/14335834-800x600.webp" alt="Real Estate Ad" />
  <CardContent>
    <CardDescription>
      Explore this beautiful property with stunning views. Spacious rooms, modern amenities, and more!
    </CardDescription>
  </CardContent>
  <CardFooter>
    <Button type='' className='w-[18rem]'>
      Learn more
    </Button>
  </CardFooter>
</Card>
</div>
    </Layout>
    </>
  );
}
