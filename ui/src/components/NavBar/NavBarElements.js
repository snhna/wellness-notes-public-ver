// Header: Wellness Notes Icon to return HOME

import styled from 'styled-components';
import { NavLink as NLink } from 'react-router-dom';

export const NavLink = styled(NLink)`
    color: #000;
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        //
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 16px 24px;
`;

