import { useState } from 'react';
import IMAGES from './resources/images'
import PHRASES from './resources/texts'
import './App.css';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(15);

  function handleNoClick() {
    setNoCount(noCount + 1);
    setYesButtonSize(Math.min(yesButtonSize * 1.2, 150));
  }

  function getNoButtonText() {
    return PHRASES[Math.min(noCount, PHRASES.length - 1)]
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img alt='bear kissing panda' src={IMAGES.gifBearKissingPanda} />

          <div id='yay'>Yay!!!</div>
        </>
      ) : (
        <>
          <img alt='bear jumping with roses' src={IMAGES.gifBearJumpingWithRoses} />

          <div className='valentine-question'>

            <h1>Will you be my Valentine?</h1>

            <div className='valentine-buttons'>
              <button
                type='button'
                className='button'
                id='yesButton'
                style={{fontSize: yesButtonSize}}
                onClick={() => setYesPressed(true)}
              >Yes</button>

              <button
                type='button'
                className='button'
                id='noButton'
                onClick={handleNoClick}
              >{getNoButtonText()}</button>
            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default App;
