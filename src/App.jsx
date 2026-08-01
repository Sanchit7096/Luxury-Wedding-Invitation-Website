
import { useState, useEffect } from 'react'
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
  const [showHero, setShowHero] = useState(false)
  const [showScratch, setShowScratch] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showRegards, setShowRegards] = useState(false)
  const [showFlowers, setShowFlowers] = useState(false)

  const handleVideoEnd = () => {
    setIsVideoClosing(true)
    
    // Start showing sections sequentially after video starts closing
    setTimeout(() => {
      setShowFlowers(true)
    }, 200)
    
    setTimeout(() => {
      setShowHero(true)
    }, 400)
    
    setTimeout(() => {
      setShowScratch(true)
    }, 800)
    
    setTimeout(() => {
      setShowInvitation(true)
    }, 1200)
    
    setTimeout(() => {
      setShowCelebration(true)
    }, 1600)
    
    setTimeout(() => {
      setShowRegards(true)
    }, 2000)
    
    setTimeout(() => {
      setShowVideo(false)
    }, 1200)
  }

  return (
    <div>
      {showVideo && <VideoIntro onVideoEnd={handleVideoEnd} isClosing={isVideoClosing} />}
      {showFlowers && <div className="animate-fade-in"><FallingFlowers /></div>}
      {showHero && <div className="animate-fade-in"><Hero /></div>}
      {showScratch && <div className="animate-fade-in"><ScratchCardSection /></div>}
      {showInvitation && <div className="animate-fade-in"><WeddingInvitationSection /></div>}
      {showCelebration && <div className="animate-fade-in"><WeddingCelebrationSection /></div>}
      {showRegards && <div className="animate-fade-in"><WarmRegardsSection /></div>}
      <MusicPlayer isOpened={!showVideo} />
    </div>
  )
}

export default App