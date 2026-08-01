
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

  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  return (
    <div>
      {showVideo && <VideoIntro onVideoEnd={handleVideoEnd} />}
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