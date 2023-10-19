import styled from 'styled-components'

interface ButtonProps {
    $bgColor?: string;
}
  
  const Button = styled.button<ButtonProps>`
    width: 100%;
    height: 48px;
    display: block;
    background-color: ${(props) => props.$bgColor || '#105ae1'};
    font-size: 18px;
    color: var(--ion-color-primary-contrast);
    cursor: pointer;
    border-radius: 50px;
  `;
  
  export default Button;