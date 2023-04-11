import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import chevron from 'images/commonSvgImg/chevron.svg';

export const AutoInput = ({
  list,
  field,
  addText = '',
  inputName,
  handleAutoinput,
  select,
}) => {
  const [inputValue, setInputValue] = useState({ value: '', selected: false });
  const [isOptionsListOpen, setIsOptionsListOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const ref = useRef(null);

  // useEffect(() => {
  //   // add event listener to document object
  //   document.addEventListener('mousedown', handleClickOutside);

  //   // cleanup function to remove event listener
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // const handleClickOutside = event => {
  //   ref.current &&
  //     !ref.current.contains(event.target) &&
  //     handleControlButtonClick();
  // };

  const handleInputChange = event => {
    const iValue = event.target.value;
    setInputValue({ value: iValue, selected: false });

    // select &&
    //   !inputValue.selected &&
    //   setInputValue({ value: '', selected: false });
    // setOptions(list);
    // console.log(select, inputValue.selected);

    handleAutoinput({
      name: inputName,
      value: iValue,
      element: null,
    });
    setOptions(
      list.filter(item =>
        item[field].toLowerCase().includes(inputValue.value.toLowerCase())
      )
    );
    setIsOptionsListOpen(true);
  };

  const handleOptionClick = index => {
    const iValue = `${options[index][field]}${addText}`;
    setInputValue({ value: iValue, selected: true });
    setIsOptionsListOpen(false);
    handleAutoinput({
      name: inputName,
      value: options[index][field],
      element: options[index],
    });
  };

  const handleControlButtonClick = () => {
    setIsOptionsListOpen(prev => !prev);
  };

  const handleBlur = () => {
    // select &&
    //   !inputValue.selected &&
    //   setInputValue({ value: '', selected: false });
    // setOptions(list);
    // console.log(select, inputValue.selected);
    setIsOptionsListOpen(prev => !prev);
  };

  useEffect(() => {
    setOptions(list);
  }, [list]);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          name={inputName}
          type="text"
          value={inputValue.value}
          autoComplete="off"
          required
          onChange={handleInputChange}
          onClick={handleControlButtonClick}
          onBlur={handleBlur}
        />
        <ControlButton type="button" onClick={handleControlButtonClick}>
          <Chevron
            src={chevron}
            alt="open list"
            rotate={isOptionsListOpen.toString()}
          />
        </ControlButton>
      </InputWrapper>
      {isOptionsListOpen && (
        <OptionsList>
          {options.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleOptionClick(index)}
              ref={ref}
            >
              {option[field]}
              {addText}
            </Option>
          ))}
        </OptionsList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* width: 100%; */
  /* color: black; */
  color: ${({ theme: { colors } }) => colors.blackText};
  /* background-color: ${({ theme: { colors } }) => colors.lightBackground}; */
`;

const InputWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  /* flex: 1; */
  padding: 16px;

  border: none;
  border-bottom: 1px solid black;
  border-radius: 4px 4px 0 0;
  /* background-color: #d9d9d9; */
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2px;

  border: none;
  border-radius: 4px;
  background-color: #d9d9d9;
  transform: translateY(-50%);
  cursor: pointer;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  z-index: 1;
  max-height: 200px;
  width: 100%;
  overflow: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;

  border: none;
  border-radius: 4px;
`;

const Option = styled.li`
  padding: 8px;
  color: opacity 0.5;
  /* background-color: ${props => (props.selected ? '#eee' : '#fff')}; */
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.greenAccent};
    color: opacity 1;
    /* background-color: #eee; */
  }
`;

const Chevron = styled.img`
  /* width: 200px; */
  /* height: auto; */
  /* border-radius: 50%; */
  transition: transform 0.5s ease-in-out; // add a transition for smooth animation
  transform: ${({ rotate }) => rotate === 'true' && 'rotate(180deg)'};
`;
