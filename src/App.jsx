import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './SignUp'
import Login from './Login'
import Onboarding from './Onboarding'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [isOnboarded, setIsOnboarded] = useState(false)

  const handleSignUp = () => {
    setShowOnboarding(true)
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    setIsOnboarded(true)
  }

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />
  }

  if (isOnboarded) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Home page coming soon...</div>
  }

  return (
    
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
        <button 
          onClick={() => setIsLogin(false)}
          style={{ 
            marginRight: '15px', 
            backgroundColor: !isLogin ? '#646cff' : 'transparent', 
            color: !isLogin ? 'white' : '#1a1a1a',
            fontWeight: !isLogin ? '400' : '300'
          }}
        >
          Sign Up
        </button>
        <button 
          onClick={() => setIsLogin(true)}
          style={{ 
            backgroundColor: isLogin ? '#646cff' : 'transparent', 
            color: isLogin ? 'white' : '#1a1a1a',
            fontWeight: isLogin ? '400' : '300'
          }}
        >
          Log In
        </button>
      </div>
      {isLogin ? <Login /> : <SignUp onSignUp={handleSignUp} />}
    </div>
  )
}

export default App
