import styled from "styled-components";

export const StyledUser = styled.section`
    background-color: ${({theme}) => theme.colors.cardBg};
    border-radius: 1rem;
    margin-bottom: 1rem;

    header {
        background-color: ${({theme}) => theme.colors.userBg};
        border-radius: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1.4rem 1.2rem;

        #user-img {
            height: 4.5rem;
            border: 3px solid white;
            border-radius: 50%;
        }

        #user-name {
            font-weight: 300;
            font-size: 1.6rem;
            color: hsl(236, 100%, 95%);

            span {
                display: block;
                font-size: 1rem;
                color: ${({theme}) => theme.colors.text};
                margin-bottom: .25rem;
            }
        }
    }

    nav {
        height: 4.5rem;
        margin: 0 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .view {
            font-size: 1.2rem;
            padding: .25rem;
            background-color: ${({theme}) => theme.colors.cardBg};
            border: none;
            color: ${({theme}) => theme.colors.links};
            transition: all 250ms linear;


            &:hover {
                cursor: pointer;
                color: white;
            }
        }

        .active {
            color: white;
        }
    }



    @media (min-width: 1440px) {
        grid-row: 1 / 3;
        margin: 0;

        header {
            height: 70%;
            padding-top: 1rem;
            flex-direction: column;
            align-items: flex-start;

            #user-name {
                font-size: 2rem;
            }
        }

        nav {
            height: 30%;
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 1.2rem;

            .view {
                font-size: .93rem;
                margin: .25rem 0;
            }
        }

    }
`