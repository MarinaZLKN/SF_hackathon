import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../../styles/TabAccordion.css';
import arrow from '../../../images/arrow-left.svg';

function TabAccordion ({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="accordion">
      <motion.div
          initial={{
              color: 'black',
              fontFamily: 'var(--font-family)',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '32px',
              paddingBottom: '8px',
              cursor: 'pointer',

          }}
          onClick={() => setIsOpen(!isOpen)}>
        {title}
          <div className="icon-wrapper">
            <img src={arrow}
                 className={`arrow-icon ${isOpen ? 'open' : ''}`}
                 style={{ transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)',
                 transition: 'transform 0.3s ease',}}/>
          </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
              initial={{
                  height: 10,
                  opacity: 0,
                  color: 'var(--Dark-gray)',
                  fontFamily: 'var(--font-family)',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 300,
                  lineHeight: '32px',

              }}
              animate={{ height: 50, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default TabAccordion;
