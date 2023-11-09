import React, {useState} from 'react';

function NewComponent() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    const videoId = 'nE_fuIa0SKo';

    const videoURL = `https://www.youtube.com/embed/${videoId}`;

    return (

        <div className="etaxi-youtube-review">
            {videoLoaded ? null : (
                 <div className="etaxi-youtube-review-loading">
                     Отзыв о Ё-Такси загружается...
                 </div>
            )}
            <div
                className={`etaxi-youtube-video-player ${videoLoaded ? 'visible' : ''}`}
                onLoad={handleVideoLoad}
            >
                <iframe
                  title="eTaxi video review"
                  width="560"
                  height="315"
                  src={videoURL}
                  allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default NewComponent;
