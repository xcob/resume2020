import React from 'react';
import ReactDOM from 'react-dom'
import {useSpring, animated} from 'react-spring'
import './App.css';


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`


// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
 const trans3 = (x, y) => `translate3d(${x /  17}px,${y /  17}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function App() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }}>
      <h2 style={{ color: '#fff', fontSize: '5rem', zIndex: 4000}}>J<span>acob</span></h2>
      </animated.div>
    
      <animated.div class="card2" style={{ transform: props.xy.interpolate(trans1) }}>
      <h2 style={{ color: '#fff', fontSize: '5rem', zIndex: 4000}}>S<span>mith</span></h2>
      </animated.div>
      <animated.div class="card5" style={{ transform: props.xy.interpolate(trans3) }}></animated.div>
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
      <animated.div class="card6" style={{ transform: props.xy.interpolate(trans3) }}></animated.div>
      <h1>About | Work | Projects</h1>
    </div>
  )
}

  // function App() {
  //   const props = useSpring({opacity: 1, from: {opacity: 0}})
  
  //   return (
  //     <div className="App">
  //       <header className="App-header">
         
  //         <animated.div style={props}>I will fade in</animated.div>
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
         
  //       </header>
  //     </div>
  //   );
  // }


export default App;
