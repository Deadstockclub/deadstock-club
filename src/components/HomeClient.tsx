"use client";

import { useEffect, useState } from "react";

import Loader from "./Loader";
import Hero from "./Hero";
import Drop from "./Drop";
import Footer from "./Footer";
export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("deadstock-loader");

    if (alreadyVisited) {
      requestAnimationFrame(() => {
        setLoading(false);
      });
    }
  }, []);
  function finishLoader() {
    sessionStorage.setItem("deadstock-loader", "true");
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <Loader onFinish={finishLoader} />
      ) : (
        <>
          <Hero />
          <Drop />
          <Footer />
        </>
      )}
    </>
  );
}
