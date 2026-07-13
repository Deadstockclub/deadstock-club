"use client";

import { useState, useEffect, useCallback } from "react";

interface MuseumCameraState {
  currentStation: number;
  isTransitioning: boolean;
  progress: number; // 0 to 1 for current transition
}

interface UseMuseumCameraProps {
  totalStations: number;
  onStationChange?: (station: number) => void;
}

export default function useMuseumCamera({
  totalStations,
  onStationChange,
}: UseMuseumCameraProps) {
  const [state, setState] = useState<MuseumCameraState>({
    currentStation: 0,
    isTransitioning: false,
    progress: 0,
  });

  const [scrollLock, setScrollLock] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  // Handle wheel scroll
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (scrollLock || state.isTransitioning) return;

      const delta = e.deltaY;
      const direction = delta > 0 ? 1 : -1;

      const nextStation = state.currentStation + direction;

      if (nextStation >= 0 && nextStation < totalStations) {
        setState((prev) => ({
          ...prev,
          currentStation: nextStation,
          isTransitioning: true,
          progress: 0,
        }));

        // Lock scroll during transition
        setScrollLock(true);
        setTimeout(() => setScrollLock(false), 1000);

        if (onStationChange) {
          onStationChange(nextStation);
        }
      }

      e.preventDefault();
    },
    [
      scrollLock,
      state.isTransitioning,
      state.currentStation,
      totalStations,
      onStationChange,
    ],
  );

  // Handle touch for mobile
  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (scrollLock || state.isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;
      const direction = delta > 0 ? 1 : -1;

      const nextStation = state.currentStation + direction;

      if (nextStation >= 0 && nextStation < totalStations) {
        setState((prev) => ({
          ...prev,
          currentStation: nextStation,
          isTransitioning: true,
          progress: 0,
        }));

        setScrollLock(true);
        setTimeout(() => setScrollLock(false), 1000);

        if (onStationChange) {
          onStationChange(nextStation);
        }
      }
    },
    [
      scrollLock,
      state.isTransitioning,
      state.currentStation,
      touchStartY,
      totalStations,
      onStationChange,
    ],
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (scrollLock || state.isTransitioning) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        const nextStation = state.currentStation + 1;
        if (nextStation < totalStations) {
          setState((prev) => ({
            ...prev,
            currentStation: nextStation,
            isTransitioning: true,
            progress: 0,
          }));

          setScrollLock(true);
          setTimeout(() => setScrollLock(false), 1000);

          if (onStationChange) {
            onStationChange(nextStation);
          }
        }
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        const nextStation = state.currentStation - 1;
        if (nextStation >= 0) {
          setState((prev) => ({
            ...prev,
            currentStation: nextStation,
            isTransitioning: true,
            progress: 0,
          }));

          setScrollLock(true);
          setTimeout(() => setScrollLock(false), 1000);

          if (onStationChange) {
            onStationChange(nextStation);
          }
        }
        e.preventDefault();
      }
    },
    [
      scrollLock,
      state.isTransitioning,
      state.currentStation,
      totalStations,
      onStationChange,
    ],
  );

  // Animation frame for transition progress
  useEffect(() => {
    if (!state.isTransitioning) return;

    let animationFrameId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 1000; // 1 second transition

      const progress = Math.min(elapsed / duration, 1);

      setState((prev) => ({
        ...prev,
        progress,
      }));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setState((prev) => ({
          ...prev,
          isTransitioning: false,
          progress: 1,
        }));
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [state.isTransitioning]);

  // Event listeners
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

  // Calculate camera position based on station and progress
  const getCameraPosition = useCallback(() => {
    // Each station is 100vh apart
    const basePosition = state.currentStation * 100;

    // If transitioning, interpolate between stations
    if (state.isTransitioning) {
      const direction = state.progress;
      return basePosition - (1 - direction) * 100;
    }

    return basePosition;
  }, [state.currentStation, state.isTransitioning, state.progress]);

  // Go to specific station
  const goToStation = useCallback(
    (station: number) => {
      if (station < 0 || station >= totalStations || state.isTransitioning)
        return;

      setState({
        currentStation: station,
        isTransitioning: true,
        progress: 0,
      });

      setScrollLock(true);
      setTimeout(() => setScrollLock(false), 1000);

      if (onStationChange) {
        onStationChange(station);
      }
    },
    [totalStations, state.isTransitioning, onStationChange],
  );

  return {
    currentStation: state.currentStation,
    isTransitioning: state.isTransitioning,
    progress: state.progress,
    cameraPosition: getCameraPosition(),
    goToStation,
    totalStations,
  };
}
