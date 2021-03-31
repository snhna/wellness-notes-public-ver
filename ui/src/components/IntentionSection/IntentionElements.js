import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    position: relative;
    padding: 0px 50px 0px 50px;
    margin: 20px;
`;

export const Link = styled(L)`
    text-decoration: none;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 115%;
`;

export const OptionContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`;

export const RadioButtonContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: stretch;
    width: 125%;
`;
