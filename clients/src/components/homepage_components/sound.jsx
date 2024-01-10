import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import CircleButtonWithImage from './circle_button';

const SoundComponent = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const sound = new Howl({
        src: ['assets/homepage/yoursmile.mp3'],
        volume: 0.5,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
    });

    useEffect(() => {
        // Play the sound by default
        console.log("OK HERE")
        sound.play();
        setIsPlaying(true);

        // Cleanup function when the component is unmounted
        return () => {
            sound.unload();
        };
    }, []);

    const toggleSound = () => {
        if (isPlaying) {
            sound.pause();
        } else {
            sound.play();
        }
    };

    return (
        <div>
            <CircleButtonWithImage imagePath={isPlaying ? '/assets/homepage/nosound.png' : '/assets/homepage/sound.png'} onClick={toggleSound} />
        </div>
    );
};

export default SoundComponent;
