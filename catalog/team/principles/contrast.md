import React from 'react';
import './Button.css';

export default function Button({children}) {
    return (
      <div className="button">
          {children}
      </div>
    );
}
