import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import suImage from './images/su.jpg'; // Import your image path

function App() {
  const [user, setUser] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isThirdPage, setIsThirdPage] = useState(false);
  const photoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleNextPage = () => {
    setIsThirdPage(true);
  };

  useEffect(() => {
    if (isSubmitted && photoRef.current) {
      photoRef.current.src = suImage; // Set the image source using the imported image path
    }
  }, [isSubmitted]);

  return (
    <div className="App">
      {!isSubmitted ? (
        <div className="login-container">
          <h1>Happy Birthday</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : !isThirdPage ? (
        <div className="second-page">
          <div className="content">
            <div className="image-container">
              <img ref={photoRef} src={suImage} alt={user} />
            </div>
            <div className="text-container">
              <h1>Happy Birthday {user}!</h1>
              <p>May you have a great day today!</p>
              <p>Here are some wishes for you:</p>
              <ul>
                <li>May all your dreams come true</li>
                <li>May your joy continue throughout the day</li>
                <li>May all the people you love surround you</li>
              </ul>
            </div>
          </div>
          <button className="next-page-button" onClick={handleNextPage}>
            Next Page
          </button>
        </div>
      ) : (
        <div className="third-page">
          <div className="content">
            <h1>Informal Wishes!!!</h1>
            <h2>
              Chala ne plan chesa eppudu routine endhuku le ani idhi chesa....
              Happy Birthday pandhi ...manchiga job thechukoni nak okka iphone 17 pro koni.....
            </h2>
            <h6>Btw idhe nee gift..</h6>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
