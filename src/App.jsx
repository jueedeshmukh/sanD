import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './SignUp'
import Login from './Login'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false)

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
      {isLogin ? <Login /> : <SignUp />}
    </div>
  )
}

export default App
