import styled from 'styled-components';




export const AuthFormElement = styled.div`
 width: 500px;
`;

export const InnerWrapper = styled.div`
 height: 100%;
 `;


export const AuthForm = styled.form`
 background-color: #2a2c36;
 border-radius: 30px;
 padding: 44px 50px;
 `;

export const FormTitle = styled.h3`
 font-size: 28px;
 font-weight: 600;
 line-height: 1;
 margin-bottom: 50px;
 `;

export const FieldWrapper = styled.div`
 position: relative;
 display: block;
 margin-bottom: 24px;
 `;

export const InputLabel = styled.label`
 position: relative;
 display: block;
 width: 100%;
 `;



export const InputField = styled.input` 
 padding: 16px 16px 16px 48px; 
 display: block; width: 100%; 
 background-color: transparent; 
 outline: none; 
 color: #fafafa; 
 font-size: 18px;
 opacity: 0.8; 
 border: 1px solid rgba(255, 255, 255, 0.3); 
 border-radius: 6px;
 

&.input-error {
   border: 1px solid #E74A3B; 
   background-image: url('../../assets/icons/error.svg'); 
   background-repeat: no-repeat; 
   background-size: 20px 20px; 
   background-position: 95% 50%; }

&:focus {
   border: 1px solid rgb(255, 255, 255) };
    `;

export const ErrorText = styled.div`
 color: #E74A3B; 
 margin-top: 8px;
 font-size: 14px;
 `;

export const SubmitButton = styled.button`
margin-top: 26px;
 background: #8baa36;
 text-align: center;
 border-radius: 6px;
 width: 100%;
 padding: 20px;
 border: none;
 outline: none;
 cursor: pointer;
 font-size: 16px;
 color: #fff;
 `;