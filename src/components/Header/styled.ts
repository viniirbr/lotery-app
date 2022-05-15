import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.color};
    padding: 50px 0;
    width: 100%;

    select {
        border-radius: 10px;
        padding: 10px 20px;
        font-weight: 500;
    }


    option {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    img {
        width: 150px;
    }

    h3 {
        font-weight: 500;
        font-size: 1rem;
    }

`