import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(0%,0)" },
    to: { transform: "translate(-30%,0)" },
    config: { duration: 3000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div key={key}>
        <div >
      <animated.div className="" style={scrolling}>{text}</animated.div>
      </div>
    </div>
  );
};

export default TextScroller;
