"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MuseumBackground from "./MuseumBackground";
import Floor from "./Floor";
import DeadstockWall from "./DeadstockWall";
import EntranceLighting from "./EntranceLighting";
import ShowcaseReveal from "./ShowcaseReveal";
import useMuseumCamera from "@/hooks/useMuseumCamera";

interface Props {
  onEnterMuseum?: () => void;
}

export default function MuseumEntrance({ onEnterMuseum }: Props) {
  const [lightsOn, setLightsOn] = useState(false);
  const { currentStation, isTransitioning, progress, cameraPosition } =
    useMuseumCamera({
      totalStations: 3,
      onStationChange: (station) => {
        if (station === 1 && onEnterMuseum) {
          onEnterMuseum();
        }
      },
    });

  // Simulate lights turning on after loader fade-out
  useEffect(() => {
    const timer = setTimeout(() => {
      setLightsOn(true);
    }, 800); // Brief hold on black after loader fade

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Museum Environment */}
      <MuseumBackground />

      {/* Cinematic Lighting */}
      <EntranceLighting isOn={lightsOn} />

      {/* Floor */}
      <Floor />

      {/* Camera Container - Moves with camera position */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: `${-cameraPosition}vh`,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
        }}
      >
        {/* Station 0: Entrance View */}
        <div className="h-screen flex items-center justify-center relative">
          <DeadstockWall />
          <ShowcaseReveal />
        </div>

        {/* Station 1: Transition through left side */}
        <div className="h-screen flex items-center justify-center">
          {/* Transition space - camera moves through left side of wall */}
        </div>

        {/* Station 2: Archive Piece 001 */}
        <div className="h-screen flex items-center justify-center">
          {/* Archive Piece 001 centered view */}
          <div className="text-center">
            <h1 className="text-6xl font-light">Archive Piece 001</h1>
            <p className="text-neutral-400 mt-4">Ready for inspection</p>
          </div>
        </div>
      </motion.div>

      {/* Debug Info */}
      <div className="fixed top-4 left-4 z-50 bg-black/50 p-2 text-xs">
        Station: {currentStation} | Transitioning:{" "}
        {isTransitioning ? "Yes" : "No"} | Progress:{" "}
        {Math.round(progress * 100)}%
      </div>
    </div>
  );
}
