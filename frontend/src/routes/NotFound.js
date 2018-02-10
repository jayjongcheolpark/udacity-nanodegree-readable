import React from 'react';

const container = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  background: '#121212',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const bg = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  mixBlendMode: 'overlay',
  backgroundImage: 'url(http://i.giphy.com/l117HrgEinjIA.gif)',
};

const code = {
  fontFamily: 'Alfa Slab One',
  fontSize: '144px',
  height: '100vh',
  color: 'white',
  width: '100%',
  display: 'flex',
  backgorundPosition: 'center',
  alignItems: 'center',
  backgroundSize: 'cover',
  justifyContent: 'center',
};

const NotFound = () => (
  <div style={container}>
    <div style={bg} />
    <div style={code}>404</div>
  </div>
);

export default NotFound;
