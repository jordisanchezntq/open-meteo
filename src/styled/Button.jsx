import styled from 'styled-components'

const Button = styled.button`
    margin: 10px auto;
    background-color: #ffc500;
    color: #000;
    cursor: pointer;
    border-radius: 50px;
    width: 260px;
    padding: 0.85rem 1rem;
    min-height: 24px;
    font-size: 1.1rem;
    transisiton: all 0.3s ease;

    &:active {
        background-color: #b68d00
    }
`

export default Button;