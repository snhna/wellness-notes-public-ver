import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 20px;
    height: 700px;
    position: relative;
    z-index: 1;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    padding: 20px;
`;

export const Button = styled.button`
    background-color: transparent;
    color: transparent;
    appearance: none;
    border: 0px;
    padding: 6px 6px;
    // onClick, add button press animation
    // outline: none;
`;

export const WelcomeContent = styled.div`    
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 800px;
    position: absolute;
    padding: 0px 16px;
    z-index: 4;
`;

export const WelcomeH1 = styled.h1`
    color: #000;
    font-size: 30px;
    text-align: left;
    padding: 15px 20px;
`;

export const WelcomeH2 = styled.h2`
    color: #000;
    font-size: 14px;
    text-align: center;
    // padding: 15px 20px;
`;

export const WelcomeText = styled.p`
    color: #000;
    font-size: 15px;
    text-align: left;
    padding: 15px 20px;
`;

