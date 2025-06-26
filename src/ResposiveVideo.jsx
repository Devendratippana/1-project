import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const ResponsiveVideo = () => {
  const videoRef = useRef(null);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.load();
      video.play().catch((err) => console.warn('Autoplay failed:', err));
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
      video.play();
      setIsMuted(false);
      setIsPlaying(true);
    }
    setShowUnmuteOverlay(false);
    setShowControls(true);
  };

  const togglePlayPause = () => {
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

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '720px', margin: 'auto' }}>
      <video
        ref={videoRef}
        style={{ width: '100%', borderRadius: '8px', display: 'block' }}
      >
        <source src="/The Future of Artificial Intelligence (Animated).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Unmute overlay */}
      {showUnmuteOverlay && (
        <div
          onClick={handleUnmute}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(44, 40, 244, 0.9)',
            borderRadius: '12px',
            padding: '20px 30px',
            color: '#fff',
            textAlign: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Video has started</div>
          <img src="/volume_off_32dp_EFEFEF_FILL0_wght400_GRAD0_opsz40.svg" alt="Unmute" />
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Click To Unmute</div>
        </div>
      )}

      {/* Custom controls */}
      {showControls && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '10px 20px',
            borderRadius: '30px',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <button onClick={togglePlayPause} style={{ background: 'none', border: 'none', color: '#fff' }}>
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          <button onClick={toggleMute} style={{ background: 'none', border: 'none', color: '#fff' }}>
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default ResponsiveVideo;
