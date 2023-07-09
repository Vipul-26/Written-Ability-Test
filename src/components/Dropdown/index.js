import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ({
  selected,
  setSelected,
  options,
  selectedTitle,
  setSelectedTitle,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <span className="span">
          {selectedTitle !== "" ? selectedTitle : selected}
        </span>
        {!isActive ? (
          <span className="fas fa-caret-down"></span>
        ) : (
          <span className="fas fa-caret-up"></span>
        )}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map(({ title, value }) => (
            <div
              onClick={(e) => {
                setSelected(value);
                setSelectedTitle(title);
                setIsActive(false);
              }}
              className="dropdown-item"
              key={title}
            >
              <span className="span">{title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
