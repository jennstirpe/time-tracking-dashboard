import styled from "styled-components";

export const StyledContainer = styled.main`
    width: 23rem;
    padding: .5rem;
    margin-top: 1rem;
    color: ${({theme}) => theme.colors.text};

    @media (min-width: 1440px) {
        width: 56rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
`