import styled from 'styled-components';

export const BallSetWrapper = styled.span`
    display: grid;
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(auto-fill, 70px);
    padding: 50px 20px 0 20px;
    column-gap: 15px;
    row-gap: 15px;
`