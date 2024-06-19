import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Fixed = () => {
  const [selectedLang, setSelectedLang] = useState('En');
  const [showFr, setShowFr] = useState(false);

  const handleClick = () => {
    if (selectedLang === 'En') {
      setShowFr(!showFr);
    } else {
      setSelectedLang('En');
      setShowFr(false);
    }
  };

  const handleSelectFr = () => {
    setSelectedLang('Fr');
    setShowFr(false);
  };

  return (
    <>
      {showFr && (
        <button className='lang-btn' onClick={handleSelectFr}>
          Fr
          <KeyboardArrowRightIcon className='lang-btn-arrow' style={{ backgroundColor: 'white', fill: 'black' }} />
        </button>
      )}
      <button className='lang-btn' onClick={handleClick}>
        {selectedLang}
        <KeyboardArrowRightIcon className='lang-btn-arrow' style={{ backgroundColor: 'white', fill: 'black' }} />
      </button>
    </>
  );
};

export default Fixed;
