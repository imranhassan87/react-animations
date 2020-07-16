import React, { useRef, useEffect } from 'react';
import useWebAnimations, { bounce } from '@wellyshen/use-web-animations'

function App() {
  const { ref } = useWebAnimations({ ...bounce })
  // const { ref, playState, getAnimation } = useWebAnimations({
  //   keyframes: [
  //     { transform: 'translateX(0px)', background: 'orange' },
  //     { transform: 'translateY(500px)', background: 'yellow' },
  //     { transform: 'translateX(500px)', background: 'pink' },
  //   ],
  //   timing: {
  //     duration: 3000,
  //     iterations: Infinity,
  //     direction: 'alternate',
  //     easing: "ease-in-out"
  //   }
  // })

  return (
    <div>
      <div ref={ref} style={{ width: '100px', background: 'orange' }}>
        hello world

    </div>
      {/* <button onClick={() => getAnimation().pause()}>pause</button> */}
    </div>
  );
}

export default App;
