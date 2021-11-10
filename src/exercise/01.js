// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const LazyWithPreload = importStatement => {
  const Component = React.lazy(importStatement)
  Component.preload = importStatement
  return Component
}

const Globe = LazyWithPreload(() => import('../globe'))

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <React.Suspense fallback={<div>LOADING...</div>}>
        <label
          style={{marginBottom: '1rem'}}
          onMouseEnter={Globe.preload}
          onFocus={Globe.preload}
        >
          <input
            type="checkbox"
            checked={showGlobe}
            onChange={e => setShowGlobe(e.target.checked)}
          />
          {' show globe'}
        </label>
        <div style={{width: 400, height: 400}}>
          {showGlobe ? <Globe /> : null}
        </div>
      </React.Suspense>
    </div>
  )
}

export default App
