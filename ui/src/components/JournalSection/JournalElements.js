import styled from 'styled-components';
// import { MdKeyboardArrowRight, MdArrowForward } from 'react-icon/md'

export const JournalContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 20px;
    height: 700px;
    position: relative;
    z-index: 1;
`;

export const JournalContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    padding: 0px 16px;
    z-index: 4;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
`;

export const Button = styled.button`
    background-color: transparent;
    color: transparent;
    appearance: none;
    border: 0px;
    border-radius: 3px;
    cursor: pointer;
    padding: 0px 6px;
    outline: none;
`;

export const JournalH1 = styled.h1`
    color: #000;
    font-size: 15px;
    text-align: left;
    padding: 10px 30px;
`;

export const JournalTextEntry = styled.textarea`
    display: flex;
    align-self: center;
    width: 85%;
    height: 390px;
    margin: 0px 24px 0px;
    box-shadow: 1px 2px 2px rgba(0,0,0,0.2);
    font-size: 15px;
`;

