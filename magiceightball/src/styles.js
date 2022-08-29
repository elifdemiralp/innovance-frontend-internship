import styled from 'styled-components';

export const StyledBody = styled.body`
    text-align: center;
`;

export const StyledTitle = styled.h1`
    font-family:fantasy;
    font-size:60px;
    padding-top: 30px;
`;

export const StyledQuestion = styled.h2`
    font-family:fantasy;
    font-size:30px;
`;

export const StyledInput = styled.input`
    border: none;
    border-radius: 15px;
    padding: 15px;
    background-color: black;
    box-shadow: 1px 1px 3px #ffffff,
                -1px -1px 3px #c5c5c5;
    font-size: medium;
    font-weight: bold;
    color: white;
    max-width: 200px;

    &:focus{
        outline-color: white;
    }
`;

export const StyledButton = styled.button`
    color: #090909;
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 15px;
    border-radius: 10px;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all .3s;
    box-shadow: 1px 1px 3px #ffffff,
                -1px -1px 3px #c5c5c5;

    &:hover {
        border: 1px solid white;
    }

    &:active {
        box-shadow: 4px 4px 12px #c5c5c5,
                    -4px -4px 12px #ffffff;
    }
`;
