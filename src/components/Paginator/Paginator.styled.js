// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
// `;

// export const Button = styled.button`
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   color: #333;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: 600;
//   margin: 0 10px;
//   padding: 8px 12px;

//   &:hover {
//     background-color: #eee;
//   }

//   &:disabled {
//     color: #999;
//     border-color: #999;
//     cursor: not-allowed;
//   }
// `;

// 2222222222222222222222222222222222222222222

// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;
// `;

// export const Button = styled.button`
//   background-color: ${({ disabled }) => (disabled ? '#ccc' : 'transparent')};
//   color: ${({ disabled }) => (disabled ? '#fff' : '#000')};
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   margin-right: 5px;
//   // cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
//   font-size: 16px;
//   line-height: 1.5;
//   transition: background-color 0.3s ease-in-out;
//   &.active {
//     background-color: #333;
//     color: #fff;
//   }
// `;
//3333333333333333333333333333333333
import styled from 'styled-components';

export const Container = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: min-content;
  list-style: none;
  display: flex;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
`;

export const Button = styled.button`
  border: none;
  background-color: ${props => (props.disabled ? '#ccc' : '#fff')};
  color: ${props => (props.disabled ? '#777' : '#222')};
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  &.active {
    background-color: #222;
    color: #fff;
  }
`;
