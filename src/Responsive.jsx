import React, { useEffect, useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa'; // npm install react-icons

const ResponsiveVideo = () => {
  const videoRef = useRef(null);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.load();
      video.play().catch((err) => console.warn('Autoplay failed:', err));

      // Listen for pause/play events
      const handlePause = () => setIsPaused(true);
      const handlePlay = () => setIsPaused(false);

      video.addEventListener('pause', handlePause);
      video.addEventListener('play', handlePlay);

      return () => {
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('play', handlePlay);
      };
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play();
    }
    setShowUnmuteOverlay(false);
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '720px', margin: 'auto' }}>
      <video
        ref={videoRef}
        controls
        style={{ width: '100%', borderRadius: '8px', display: 'block' }}
      >
        <source src="/The Future of Artificial Intelligence (Animated).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Unmute overlay (initial only) */}
      {showUnmuteOverlay && (
        <div
          onClick={handleUnmute}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(171, 109, 179, 0.9)',
            borderRadius: '10px',
            padding: '20px 30px',
            color: '#fff',
            textAlign: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
            <div style={{ fontSize: '15px', fontWeight: 'bold' }}>video is strated </div>
         <img src="/volume_off_32dp_EFEFEF_FILL0_wght400_GRAD0_opsz40.svg"/>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Click To Unmute</div>
        </div>
      )}

      {/* Play overlay on pause */}
      {isPaused && !showUnmuteOverlay && (
        <div
          onClick={handlePlayClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(54, 12, 243, 0.8)', // blue
            borderRadius: '50%',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <FaPlay color="white" size={24} style={{ marginLeft: '5px',  }} />
        </div>
      )}
    </div>
  );
};

export default ResponsiveVideo;
