import React from 'react';

function Header({ title }) {
  // Intentional Bug: No null check for title
  // Will crash if title prop is missing
  return <h1>{title.toUpperCase()}</h1>;
}

export default Header; 