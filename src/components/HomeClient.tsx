"use client";

import { useState } from "react";

import Loader from "./Loader";
import MuseumEntrance from "./museum/MuseumEntrance";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <MuseumEntrance />
      )}
    </>
  );
}
