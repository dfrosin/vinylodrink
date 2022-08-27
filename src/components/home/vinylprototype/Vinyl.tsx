import { useState } from 'react';
import './vinyl.css';

function Vinyl() {
  const [isClicked, setClicked] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(true);
  const clicked = () => {
    setClicked(true);
    setTimeout(() => setVisible(false), 5000);
  };
  return (
    <>
      {isVisible && (
        <div
          onClick={clicked}
          className={`Vinyl${isClicked ? ' clicked' : ''}`}
        >
          <div className="vinyl-center">
            <img className="drink" src="/drink.svg" alt="" />
          </div>
          <div className="inside-vinyl"></div>
          <div className="both-lines">
            <div className="line"></div>
            <div className="line2"></div>
          </div>
          <div className="both-lines2">
            <div className="line"></div>
            <div className="line2"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Vinyl;
