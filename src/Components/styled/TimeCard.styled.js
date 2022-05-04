import styled from "styled-components";

export const StyledTimeCard = styled.section`
    border-radius: 1rem;
    background: ${(props) => props.color};
    margin-bottom: 1.5rem;

    .banner {
        height: 2.5rem;
        position: relative;
        overflow: hidden;

        .workIcon, .playIcon, .studyIcon, .exerciseIcon, .socialIcon, .selfCareIcon {
            display: none;
            position: absolute;
            right: 1.25rem;
            top: -0.7rem;
        }
    }

    #work {
        .workIcon {
            display: block;
        }
    }

    #play {
        .playIcon {
            display: block;
        }
    }

    #study {
        .studyIcon {
            display: block;
        }
    }

    #exercise {
        .exerciseIcon {
            display: block;
        }
    }

    #social {
        .socialIcon {
            display: block;
        }
    }

    #self {
        .selfCareIcon {
            display: block;
        }
    }

    .time-card {
        background: ${({theme}) => theme.colors.cardBg};
        border-radius: 1rem;
        padding: 1.5rem 0;
        transition: all 500ms ease-out;

        &:hover {
            cursor: pointer;
            background: ${({theme}) => theme.colors.hoverBg};;
        }

        .card-info, .time {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1.75rem;
        }

        .card-info {
            h2 {
                text-transform: capitalize;
                color: #fff;
                font-weight: 400;
                font-size: 1.25rem;
                margin: .25rem 0;
            }
        }

        .time {
            .current-hours {
                font-size: 2rem;
                color: #fff;
                font-weight: 300;
                margin: 0rem;
            }

            .previous-hours {
                font-weight: 300;
                margin: 0rem;
            }
        }

    }


    @media (min-width: 1440px) {
        margin: 0;

        .time-card {

            .card-info {
                h2 {
                    font-weight: 500;
                    font-size: .93rem;
                }
            }

            .time {
                flex-direction: column;
                align-items: flex-start;


                .current-hours {
                    font-size: 2.5rem;
                    margin: 1rem 0 .45rem 0;
                }

                .previous-hours {
                    font-size: .7rem;
                }
            }

        }
    }

`