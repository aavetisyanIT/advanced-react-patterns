// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return React.Children.map(children, child => {
    const isDomElement = typeof child.type === 'string'
    return React.cloneElement(child, {
      on: isDomElement ? on.toString() : on,
      toggle: isDomElement ? toggle.toString() : toggle,
    })
  })
}

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => <div>{on ? children : null}</div>

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => <div>{!on ? children : null}</div>

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
