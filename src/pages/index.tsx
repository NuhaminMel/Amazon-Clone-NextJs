import Image from "next/image";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "@/Components/Banner/Banner";
import Product from "@/Components/Product/Product";
import { ProductProps } from "../../type";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllProducts } from "@/Store/nextSlice";

// const inter = Inter({ subsets: ["latin"] });
interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  }, [productData]);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Product productData={productData} />
        </div>
      </div>
    </main>
  );
}

// Server Search Rendering (SSR) or data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
