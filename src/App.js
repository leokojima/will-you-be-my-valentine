import { useState } from "react";
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Like... really sure?",
  "Surely that was a mistake lol",
  "Como vc é boba",
  "진짜 너무 예뻐요!",
  "Don't do this to me",
  "I'm gonna cry...",
  "Bubu, you're breaking my heart ;(",
  "Do you not like Giraffon?",
  "BE MY VALENTINE GAWD D*MMIT",
  "Just click 'Yes'",
  "You're being ridiculous",
  "Vou peidar na sua cara",
  "There is no other option",
  "This is not a democracy",
  "You are MINE!!!",
  "Rage is over",
  "I'm sorry",
  "Hmmm! (pinching your butt)",
  "Keep being 괜찮아",
  "Even though life is 시발새끼야!",
  "내 발렌타인이 되어줘, 공주님",
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 15 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div id="yay">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />

          <h1 className="question">Will you be my Valentine?</h1>

          <div>
            <button
              id="yesButton"
              className="button"
              role="button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >Yes</button>

            <button
              id="noButton"
              className="button"
              role="button"
              onClick={handleNoClick}
            >{getNoButtonText()}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
