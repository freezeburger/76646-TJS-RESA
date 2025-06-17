import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
    border: none;
    color:white;
    background-color: ${ ({color}) => color == 'blue' ? '#007bff': 'crimson'};
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    transform: scale(1);
    margin: 5px;
    max-width: 250px;

    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
`;
