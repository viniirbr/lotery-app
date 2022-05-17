import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.color};
    padding: 30px 0;
    width: 100%;
    height: 50vh;

    select {
        border-radius: 10px;
        padding: 10px 20px;
        font-weight: 500;
    }

    h1 {
        font-size: 1.3rem;
    }


    option {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 50%;
    }

    img {
        width: 80px;
    }

    h3 {
        font-weight: 500;
        font-size: 1rem;
    }

    .contest-info {
        height: 30px;
    }

    .contest-mobile {
        display: block;
    }

    .contest, .contest-date {
        display: none;
    }

    @media screen and (min-width: 900px){
        height: 100vh;
        justify-content: space-between;
        width: 30%;
        padding: 50px 0;

        div {
            flex-direction: row;
            gap: 10px;
        }
        
        .contest-info {
            display: flex;
            flex-direction: column;
        }

        .contest-mobile {
        display: none;
        }
        
        .contest, .contest-date {
        display: block;
        }

        .contest-date {
            font-size: 0.8rem;
        }
    }

`