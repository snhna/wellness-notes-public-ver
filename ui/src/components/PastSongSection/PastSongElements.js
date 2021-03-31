import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: stretch;
    // width: 90%;
    position: relative;
    padding: 0px 20px;
    margin: 20px;
`;

export const Link = styled(L)`
    text-decoration: none;
`
