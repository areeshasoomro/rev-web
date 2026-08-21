

'use client';

import { useRef, useState } from 'react';
import styles from '@/components/astro.module.css';

export default function VideoPlayer() {
  // 1. Explicitly type the ref as HTMLVideoElement
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    // 2. Safely access the current video element
    const video = videoRef.current;

    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={styles.videoWrapper}>
      <div className={styles.videoInner}>
        <video
          ref={videoRef}
          className={styles.videoElement}
          muted
          playsInline
          src="/astro.mp4"
          onClick={togglePlay}
        />
        {!isPlaying && (
          <div className={styles.playButton} onClick={togglePlay} />
        )}
      </div>
    </div>
  );
}