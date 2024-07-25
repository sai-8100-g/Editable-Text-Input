import styled from 'styled-components'

export const MainContainer = styled.div`
   height: 100vh;
   background-color: #f5d0fe; 
   display: flex; 
   justify-content: center;
   align-items: center;


   .inputContainer {
    width: 100%;
    display: flex;
    justify-content: center;
   }/
`

export const TextContent = styled.div`
    padding: 2%;
    background-color: #ffffff; 
    min-width: 30%;
    min-height: 300px; 
    border:none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;/
`

export const Heading = styled.h1`
   color:  #323f4b; 
   font-weight: bold;/
`

export const Input = styled.input`
    padding: 2.5%;
    margin-right: 1%;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #cbd2d9;


    &:focus {
        outline: none;
    }/
`

export const Button = styled.button`
    background-color: #d946ef;
    color: #ffffff;
    padding: 1% 3%; 
    border:none; 
    border-radius: 4px ;/
`

export const Para = styled.p`
margin: 1% ; 
   color: #000000;/
`
