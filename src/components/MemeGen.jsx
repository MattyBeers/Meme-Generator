import React, { useState, useEffect } from 'react';


function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [randomMeme, setRandomMeme] = useState('');
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    // Fetch meme data once
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
        if (data.data.memes && data.data.memes.length > 0) {
          const idx = Math.floor(Math.random() * data.data.memes.length);
          setRandomMeme(data.data.memes[idx].url);
        }
      })
      .catch(() => {});
  }, []);

  const getRandomMeme = (memes) => {
    if (!memes || memes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex].url);
  };

  const handleGetNewImage = () => {
    getRandomMeme(allMemes);
  };

  return (
    <main>
      <div className="meme-generator">
        <div className="meme-container">
          <input
            type="text"
            className="text-input"
            placeholder="Top Text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            type="text"
            className="text-input"
            placeholder="Bottom Text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
          <button className="button" onClick={handleGetNewImage}>
            Get New Image
          </button>
        </div>

        <div className="preview">
          {randomMeme ? (
            <div className="meme-preview">
              <img src={randomMeme} alt="Random Meme" className="meme-image" />
              <div className="meme-overlay">
                <div className="overlay-line top">{topText}</div>
                <div className="overlay-line bottom">{bottomText}</div>
              </div>
            </div>
          ) : (
            <div className="meme-placeholder">No image yet</div>
          )}
          <div className="preview-actions">
            <button className="button secondary" onClick={handleGetNewImage}>
              New Image
            </button>
            <button
              className="button"
              onClick={() => {
                const a = document.createElement('a');
                a.href = randomMeme;
                a.download = 'meme.jpg';
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}
            >
              Download
            </button>
          </div>
        </div>

        <div className="recently-submitted">
          <p>Recently Submitted:</p>
          <p className="submitted-text">{`${topText} ${bottomText}`}</p>
        </div>

        <div className="meme-grid">
          {allMemes.slice(0, 12).map((meme) => (
            <div
              key={meme.id}
              className="meme-card"
              onClick={() => setRandomMeme(meme.url)}
              title={meme.name}
            >
              <img src={meme.url} alt={meme.name} className="meme-thumb" />
              <div className="caption">{meme.name}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MemeGenerator;
