import React, { useEffect, useRef, useState } from 'react';

const MobileAutoplayVideo = () => {
  const videoRef = useRef(null);
  const [isMutedOverlayVisible, setIsMutedOverlayVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn('Autoplay failed:', err);
      });
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play();
    }
    setIsMutedOverlayVisible(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '720px', margin: 'auto' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        controls={!isMutedOverlayVisible}
        style={{ width: '100%', borderRadius: '10px', display: 'block' }}
      >
        {/* Replace with your actual video file placed in the /public folder */}
        <source src="/The Future of Artificial Intelligence (Animated).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isMutedOverlayVisible && (
        <div
          onClick={handleUnmute}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '20px 30px',
            color: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            zIndex: 10,
            textAlign: 'center',
          }}
        >
          <img
            src="/volume_off_32dp_EFEFEF_FILL0_wght400_GRAD0_opsz40.svg"
            alt="Unmute"
            style={{ width: 40, marginBottom: 10 }}
          />
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Tap to Unmute</div>
        </div>
      )}
    </div>
  );
};

export default MobileAutoplayVideo;
