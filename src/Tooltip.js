import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function Tooltip({ children, id, text, place="bottom" }) {
  return (
    <>
      <span data-tip="custom theme" data-for={id}>
        {text}
      </span>
      <ReactTooltip data-for={id} id={id} place={place} className="customTheme" wrapper="span">
        {children}
      </ReactTooltip>
    </>
  );
}
