import styled from "styled-components"
import Head from "next/head"

const StyleSummaryQuestions = styled.div`
text-align: center;

button[type=submit]{
    background-color: var(--yellow);
    border: 1px solid var(--yellow);
    padding: 15px 30px;
    margin-top: 30px;
    font-family: 'Helvetica';
    border-radius: 5px;
    cursor: pointer;
    
    &:hover{
        background-color: var(--white);
        border: 1px solid var(--black);
      }
}
`
export default function SummaryQuestions() {
    return (
        <>
        <StyleSummaryQuestions>
        <h1>Bilan des Questions</h1>
        <div></div>
        <button type="submit">Lancer la session</button>
        </StyleSummaryQuestions>
        </>
    )
}