import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import DataSection from "../components/DataSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BasicLayout from "../components/Layout/Basic";
import { NextPageWithLayout } from "../components/Layout/LayoutTypes";
import Staking from "../components/Staking";
import TopWinners from "../components/TopWinners";

<<<<<<< HEAD

export {};
declare global {
  interface Window {
    ethereum: any;
      
  }
}

=======
>>>>>>> 47b8333f80b8487d0a91a8966b8df6ca1b6748a8
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <TopWinners />
      <DataSection />
      <Staking />
      <Footer />
    </>
  );
};
export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
