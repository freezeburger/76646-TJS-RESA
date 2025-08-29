import styled from '@emotion/styled';

export const NavigationWrapper = styled.div`
    background-color: #282c34;
    padding: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
    
        &:hover {
            text-decoration: underline;
        }
    }
    
`;
