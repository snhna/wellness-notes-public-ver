import styled from 'styled-components';

export const MoodContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 20px;
    height: 200px;
    position: relative;
    z-index: 1;
`;

export const MoodContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 800px;
    position: absolute;
    padding: 0px 16px;
    z-index: 4;
`;

export const MoodButtonContainer = styled.div`
    display: flex;
    flex-flow: row;
    // padding: 15px 15px;
    // justify-content: space-between;
    // align-items: center;
`;

export const MButtonContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding: 5px 5px;
`

export const MoodButton = styled.button`
    background-color: transparent;
    color: transparent;
    appearance: none;
    border: 0px;
    border-radius: 3px;
    padding: 5px 6px;
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

export const MoodH1 = styled.h1`
    color: #000;
    font-size: 30px;
    text-align: left;
`;

export const MoodH2 = styled.h2`
    color: #000;
    font-size: 25px;
    text-align: center;
    padding: 15px;
`;

export const MoodText = styled.p`
    color: #000;
    font-size: 15px;
    text-align: left;
    padding: 22px;
`;

