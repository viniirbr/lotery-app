import styled from 'styled-components';

export const AppWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


    main {
        display: flex; 
        flex-direction: column; 
        align-items: center;
        background: rgba(239, 239, 239, 1);
    }

    footer p {
        text-align: center;
        padding: 50px;
    }

    @media screen and (min-width: 900px){
        flex-direction: row;
        justify-content: space-between;

        .bottom-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: calc(100vh);
            padding-top: 5%;
        }
    }
`