'use client'

import { useEffect, useRef } from 'react'

export function AntVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle browser autoplay policy gracefully
      })
    }
  }, [])

  return (
    <div className="ant-video-panel">
      <div className="video-card">
        <video
          ref={videoRef}
          src="/generated-ant-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="ant-video-media"
        />
        <div className="video-vignette" />
        <div className="video-meta">
          <div className="video-tag">
            <span className="live-dot" /> FORMICX / 360° CYBER-ANT MESH
          </div>
          <div className="video-status">
            <span>ROTATION</span>
            <b>360° LOOP</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AntScene() {
  return <AntVideo />
}

export default AntScene
