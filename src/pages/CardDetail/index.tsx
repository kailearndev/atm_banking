import { motion } from 'framer-motion';
import { useState } from 'react';

const CardDetail = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleDivClick = () => {
    // Toggle the state when the div is clicked
    setIsClicked(!isClicked);
  };
  return (
    <div className="h-[100%] text-white">
      <div>
        <motion.div
          className="your-div-class"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isClicked ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 11,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          onClick={handleDivClick}
        >
          {/* Your first div content here */}
          <p>First Div Content</p>
        </motion.div>

        {isClicked ? (
          <motion.div
            className="your-div-class"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isClicked ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 11,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            {/* Your second div content here */}
            <p>Second Div Content</p>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default CardDetail;