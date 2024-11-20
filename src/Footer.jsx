import React from 'react';

function Footer({ footerText }) {
  // Intentional Bug: No default value for prop
  // Will render empty paragraph if footerText is missing
  return <p>{footerText}</p>;
}

export default Footer; 