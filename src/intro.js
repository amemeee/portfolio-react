import React, { useEffect,useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import seishin from './images/seishin.gif'; // Import the image
import darkaria from './music/darkaria.mp3'; // Import the image
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBackward, faPlay, faPause, faForward, faHeart,faEllipsisV, faVolumeUp, faVolumeMute} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


const Intro = () => {
  useEffect(() => {
    const img = document.querySelector('.img-fluid');
    img.classList.add('animate__animated', 'animate__zoomIn');

    return () => {
      // Optional cleanup - remove the animation class when component unmounts
      img.classList.remove('animate__animated', 'animate__zoomIn');
    };
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%
  const [songAnnouncement, setSongAnnouncement] = useState(''); // State to announce the song
  const [timeRemaining, setTimeRemaining] = useState(''); // State for time remaining
  const audioRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (isPlaying) {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
  
        const remainingTime = duration - currentTime;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = Math.floor(remainingTime % 60);
  
        setTimeRemaining(`${minutes} mins ${seconds} secs`);
      }
    };

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the song
    } else {
      audioRef.current.play(); // Play the song
    }
    setIsPlaying(!isPlaying); // Toggle playback state
  };

  const handleVolumeToggle = () => {
    if (isMuted) {
      audioRef.current.volume = volume; // Restore previous volume
    } else {
      audioRef.current.volume = 0; // Mute the audio
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume); // Update volume state
    audioRef.current.volume = newVolume; // Adjust volume
    if (newVolume > 0 && isMuted) {
      setIsMuted(false); // Unmute if volume is adjusted from mute state
    }
  };

  return (
    <div></div>
  );
};

export default Intro;