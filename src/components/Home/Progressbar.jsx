import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientProgress = styled(LinearProgress)(() => ({
  height: 10, // Increased height of the progress bar
  borderRadius: 5, // Rounded corners for the progress bar container
  backgroundColor: 'transparent', // Set background color to transparent
  '& .MuiLinearProgress-bar': {
    borderRadius: 5, // Rounded corners for the inner progress bar
    background: `linear-gradient(
      90deg, 
      #FF5F6D, 
      #FFC371, 
      #FF9A8B, 
      #FFDEE9, 
      #B5FFFC, 
      #89FFFD, 
      #6DFFB3, 
      #84FAB0, 
      #8FD3F4, 
      #3E82FC
    )`, // 10-color gradient
  },
}));

const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollY / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <GradientProgress
      variant="determinate"
      value={progress}
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
    />
  );
};

export default Progressbar;
