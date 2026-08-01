
import { useState } from 'react'
import Hero from './Components/hero'
import ScratchCardSection from './Components/ScratchCardSection'
import WeddingInvitationSection from './Components/WeddingInvitationSection'
import WeddingCelebrationSection from './Components/WeddingCelebrationSection'
import WarmRegardsSection from './Components/WarmRegardsSection'
import FallingFlowers from './Components/FallingFlowers'
import VideoIntro from './Components/VideoIntro'
import MusicPlayer from './Components/MusicPlayer'

const App = () => {
  const [showVideo, setShowVideo] = useState(true)
  const [isVideoClosing, setIsVideoClosing] = useState(false)

  const handleVideoEnd = () => {
    setIsVideoClosing(true)
    setTimeout(() => {
      setShowVideo(false)
    }, 1200)
  }

  return (
    <div>
      {showVideo && <VideoIntro onVideoEnd={handleVideoEnd} isClosing={isVideoClosing} />}
      {!showVideo && <FallingFlowers />}
      {!showVideo && <Hero />}
      {!showVideo && <ScratchCardSection />}
      {!showVideo && <WeddingInvitationSection />}
      {!showVideo && <WeddingCelebrationSection />}
      {!showVideo && <WarmRegardsSection />}
      <MusicPlayer isOpened={!showVideo} />
    </div>
  )
}

export default App