import Layout from "@/components/Layout";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <>
    <Layout>
      <center>
          <h1 className="font-bold text-4xl mt-16">
            Ideal Real Estate Matches for Everybody, Everywhere.
          </h1>
        <div className="2xl:w-1/3 lg:w-1/2 md:w-1/2 w-3/4 mt-16">
          <SearchBar />
        </div>
      </center>
    </Layout>
    </>
  );
}
