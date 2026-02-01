import { useState } from 'react'

function SignUp() {
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    // if i type, "a", it is reflected in textbox
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // makes sure page doesnt refresh on submit
    const handleSubmit = (e) => {
        e.preventDefault()
        // REPLACE!!!!
        console.log('Form submitted:', formData)
    }

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px'}}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '8px'}}
              />
            </div>
    
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '8px'}}
              />
            </div>
    
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '8px'}}
              />
            </div>
    
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box',  borderRadius: '8px'}}
              />
            </div>
    
            <button 
              type="submit" 
              style={{ 
                width: '100%', 
                padding: '10px', 
                backgroundColor: '#646cff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8x',
                cursor: 'pointer'
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      )
}

export default SignUp

