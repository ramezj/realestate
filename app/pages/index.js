import Layout from "@/components/Layout";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { HeartIcon, DotsVerticalIcon,PhoneIcon, MailIcon, ChatIcon } from '@heroicons/react/solid';
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
  const [likedButtons, setLikedButtons] = useState([]);

  const onSearch = (e) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`)
  }
  
  const handleLikeClick = (index) => {
    setLikedButtons((prevLikedButtons) => {
      const updatedLikedButtons = [...prevLikedButtons];
      updatedLikedButtons[index] = !updatedLikedButtons[index];
      return updatedLikedButtons;
    });
  };
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
  <Card className=''>
    <CardHeader>
      <CardTitle>Real Estate Ad</CardTitle>
    </CardHeader>
    <CardImage src="https://bayut-eg-production.s3.amazonaws.com/thumbnails/14335834-800x600.webp" alt="Real Estate Ad" />
    <CardContent>
      <CardDescription>
        Explore this beautiful property with stunning views. Spacious rooms, modern amenities, and more!
      </CardDescription>
    </CardContent>
    <CardFooter className="flex justify-end items-center">
      <div className="flex items-center space-x-4">
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
        <PhoneIcon className="h-6 w-6 mr-2" />
          Call
        </Button>
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
        <MailIcon className="h-6 w-6 mr-2" />
          Email
        </Button>
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
        <ChatIcon className="h-6 w-6 mr-2" />
          Whatsapp
        </Button>
        <Button
          type=''
          className={`w-[50%] text-right bg-gray-800 text-white border border-gray-500`}
          onClick={() => handleLikeClick(1)}
        >
          <HeartIcon className={`h-6 w-6 ${likedButtons[1] ? 'text-red-500' : ''}`} />
        </Button>
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
          <DotsVerticalIcon className="h-6 w-6" />
        </Button>
      </div>
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
    <CardFooter className="flex justify-end items-center">
      <div className="flex items-center space-x-4">
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
        <PhoneIcon className="h-6 w-6 mr-2" />
          Call
        </Button>
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
        <MailIcon className="h-6 w-6 mr-2" />
          Email
        </Button>
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
        <ChatIcon className="h-6 w-6 mr-2" />
          Whatsapp
        </Button>
        <Button
          type=''
          className={`w-[50%] text-right bg-gray-800 text-white border border-gray-500`}
          onClick={() => handleLikeClick(2)}
        >
          <HeartIcon className={`h-6 w-6 ${likedButtons[2] ? 'text-red-500' : ''}`} />
        </Button>
        <Button type='' className='w-[50%] text-right bg-gray-800 text-white border border-gray-500'>
          <DotsVerticalIcon className="h-6 w-6" />
        </Button>
      </div>
    </CardFooter>
  </Card>
</div>
    </Layout>
    </>
  );
}
