import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .Select__control {
    border: none;
    box-shadow: none;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes[4]}px;
    border-radius: 5px;
    min-height: initial;
    background-color: ${props => props.theme.colors.normalGrey};
    width: 198px;
    height: 49px;

    cursor: pointer;
    caret-color: transparent;
  }

  .Select__option {
    width: 198px;
    user-select: none;
    cursor: pointer;
    background-color: white;
    color: black;
    font-size: ${props => props.theme.fontSizes[4]}px;
    outline: none;
    opacity: 0.5;
    &:active {
      background-color: #e6e6e6;
    }
  }

  .Select__dropdown-indicator {
    color: ${props => props.theme.colors.greenAccent};
    padding-bottom: 14px;
    padding=top: 14px;
    padding-right: 14px;
    padding-left: 0;
    &:before {
      content: none;
    }
    &:after {
      content: none;
    }
  }

  .Select__menu {
    width: 198px;
    border: none;
    box-shadow: none;
    background-color: white;
    color: black;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__single-value {
    opacity: 0.5;
  }
`;
