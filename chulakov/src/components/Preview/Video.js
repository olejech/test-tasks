import React, { useEffect, useRef } from 'react'
import { autoPlay } from '../../common/autoPlay'

export const Video = ({ video, isAutoPlay, isAutoPlayHandler }) => {
  const ref = useRef(React.createRef())

  useEffect(() => {
    const video = ref.current.current
    window.addEventListener('scroll', () => autoPlay(video, isAutoPlay))

    return () => {
      window.removeEventListener('scroll', autoPlay)
    }
  }, [isAutoPlay])

  return (
    <video
      ref={ref.current}
      src={`/videos/${video}.mp4`}
      controls
      loop
      onClick={isAutoPlayHandler}
    />
  )
}
