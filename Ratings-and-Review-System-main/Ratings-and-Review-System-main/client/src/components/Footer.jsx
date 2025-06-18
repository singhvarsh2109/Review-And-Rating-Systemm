import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#222',
      color: '#fff',
      padding: '16px',
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <p>&copy; {new Date().getFullYear()} Ratings & Reviews App</p>
    </footer>
  );
}

export default Footer;