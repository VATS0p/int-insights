import React, { useState } from 'react';
import './Search.css'

const Search = ({ label, options, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSubmit(option);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={`select-menu ${isOpen ? 'active' : ''}`}>
      <div className="select-btn" onClick={handleToggleMenu}>
        <span>{selectedOption || label}</span>
        <i className="uil uil-angle-down"></i>
      </div>
      {isOpen && (
        <div className="content">
          <div className="search">
            <i className="uil uil-search"></i>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              spellCheck="false"
              placeholder="Search"
            />
          </div>
          <ul className="options">
            {filteredOptions.map((option) => (
              <li
                key={option}
                className={option === selectedOption ? 'selected' : ''}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search
