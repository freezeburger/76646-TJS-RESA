import styled from '@emotion/styled';

export const AppBarWrapper = styled.div`
    z-index: 100;
    padding: 10px;
    margin-bottom: 20px;
    background-color: rgba(140, 193, 247, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;

    img {
        transform: scale(0.75);
        transition: transform 1s ease;
    }

    @media (max-width: 600px) {
        img {
            transform: scale(0.25);
        }
    }
`;
