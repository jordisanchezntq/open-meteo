import styled from 'styled-components'

interface ButtonProps {
    $bgColor?: string;
}
  
  const Button = styled.button<ButtonProps>`
    display: block;
    background-color: ${(props) => props.$bgColor || '#105ae1'};
    font-size: 18px;
    margin: 10px auto;
    color: var(--ion-color-primary-contrast);
    cursor: pointer;
    border-radius: 50px;
    width: 100%;
    padding: 1rem;
    min-height: 44px;
  `;
  
  export default Button;