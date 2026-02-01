import { useState } from 'react'

function Onboarding({ onComplete }) {
  const [courses, setCourses] = useState([])
  const [currentCourse, setCurrentCourse] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const [college, setCollege] = useState('')

  const colleges = [
    'Seventh',
    'ERC',
    'Marshall',
    'Sixth',
    'Muir',
    'Revelle',
    'Eighth',
    'Warren'
  ]

  const handleAddCourse = () => {
    if (currentCourse.trim()) {
      setCourses([...courses, currentCourse.trim()])
      setCurrentCourse('')
      setIsAdding(false)
    }
  }

  const handleRemoveCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Onboarding submitted:', { courses, college })
    onComplete()
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Courses Section */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: '500' }}>
            Add Your Courses
          </label>
          <div style={{ marginBottom: '12px' }}>
            {courses.map((course, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '8px',
                  padding: '8px 12px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0'
                }}
              >
                <span style={{ flex: 1 }}>{course}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCourse(index)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ff6b6b',
                    border: 'none',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#ff4444'}
                  onMouseOut={(e) => e.target.style.color = '#ff6b6b'}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {isAdding ? (
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={currentCourse}
                onChange={(e) => setCurrentCourse(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddCourse()
                  }
                }}
                placeholder="e.g., CSE 101"
                autoFocus
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  boxSizing: 'border-box'
                }}
              />
              <button
                type="button"
                onClick={handleAddCourse}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#646cff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Add
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsAdding(true)}
              style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#f5f5f5',
                color: '#646cff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#efefff'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            >
              + Add Course
            </button>
          )}
        </div>

        {/* College Dropdown */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="college" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
            Select Your College
          </label>
          <select
            id="college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              backgroundColor: '#fff',
              fontSize: '0.95em'
            }}
          >
            <option value="">Select a college</option>
            {colleges.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.95em'
          }}
        >
          Complete Onboarding
        </button>
      </form>
    </div>
  )
}

export default Onboarding
