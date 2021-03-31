import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    position: relative;
    margin: 20px;
`;

export const Link = styled(L)`
    text-decoration: none;
`