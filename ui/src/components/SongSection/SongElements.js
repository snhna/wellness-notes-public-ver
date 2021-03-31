import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 0px 20px;
    margin: 0 25px;
`;

export const Link = styled(L)`
    text-decoration: none;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    width: 125%;
    padding: 0px 45px;
`;

export const SongH2 = styled.h2`
    color: #000;
    font-size: 15px;
    text-align: left;
    padding: 15px;
`;
