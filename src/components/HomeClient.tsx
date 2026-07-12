"use client";

import { useState } from "react";

import Loader from "./Loader";
import CuratedCollection from "./CuratedCollection";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader
          onFinish={() => {
            setLoading(false);
          }}
        />
      ) : (
        <CuratedCollection />
      )}
    </>
  );
}
