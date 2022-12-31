import React from 'react';
import { useSpring, animated } from 'react-spring';

const Profile = () => {

  const pictureSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-50px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    config: { duration: 1000 }
  });
  
  const bioSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(50px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    config: { duration: 1000 }
  });
  
  const socialLinksSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(50px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    config: { duration: 1000 }
  }); 

  const nameSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(0px) scale(0.1)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0) scale(1)'
    },
    config: { duration: 1000 }
  });
      

  return (
    <div style={{  maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '100px' }}>
      <animated.img src="/amsterdamn.jpg" alt="Adam Ordway" style={{ ...pictureSpring, border: '8px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '180px', height: '180px', objectFit: 'cover', margin: '0 auto', marginBottom: '32px' }} />
      <animated.div style={{ ...nameSpring, width: '250px', backgroundColor: 'white', borderRadius: '4px', padding: '2px 8px', marginTop: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '40px', color: 'rgba(0, 0, 0, 0.8)', margin:'0px auto' }} >Adam Ordway</h1>
      </animated.div>
      <animated.p style={bioSpring}>I am a software developer with a passion for building web applications. I am skilled in JavaScript, HTML, and CSS, and I am always learning new technologies and frameworks to improve my skills.</animated.p>
      <animated.div style={socialLinksSpring}>
        <a href="https://github.com/codebyadam" target="_blank">
          <img src="/github-logo.png" alt="GitHub" style={{ width: '32px', height: '32px', marginRight: '16px' }} />
        </a>
        <a href="https://linkedin.com/in/adam-ordway" target="_blank">
          <img src="/linkedin-logo.png" alt="LinkedIn" style={{ width: '32px', height: '32px', marginLeft: '16px' }} />
        </a>
      </animated.div>
    </div>
  );
};

export default Profile;
