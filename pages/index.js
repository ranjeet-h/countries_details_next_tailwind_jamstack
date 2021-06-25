import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";

import all from "../data/all.json";
import ApiContext from "../apiContext";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CountryCard from "../components/CountryCard";

export default function Home() {
  // const data = all.map((array) => {
  //  return array.flag;
  // })
  // console.log(data)
  // const data = useContext(ApiContext);

  const [dark, setDark] = useState(false);

  const switchTheme = () => {
    setDark(!dark);
  };

  return (
    <ApiContext.Provider value="test">
      <div className={`bg-[#fafafa] ${dark ? "dark" : ""} `}>
        <Head>
          <title>Where In The World</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar switchTheme={switchTheme} />
        <main>
          <Header />
         
            <CountryCard all={all} />
          
          {/* {all.map((array) => (<h1 key={array.name} className="text-[4rem] ">{array.name}</h1>))} */}
        </main>

        <footer></footer>
      </div>
    </ApiContext.Provider>
  );
}
