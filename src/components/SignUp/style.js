import styled from "styled-components";

export const RegisterStyle = styled.div`

`

export const InputBox = styled.div`
display: flex;
position: relative;
padding: 5px 0;
    label{
        width: 15%;
        margin-top: 10px;
    }
    input{
        width: 70%;
    }
    span{
        position: absolute;
        bottom: -12px;
        left: 16%;
        color: red;
        font-size: 10px;
    }
    button{
        margin-top: auto;
    }
`
export const Wthdr = styled.p`
cursor: pointer;
position: absolute;
bottom: 30px;
right: 30px;
color: red;
font-weight: bold;
`