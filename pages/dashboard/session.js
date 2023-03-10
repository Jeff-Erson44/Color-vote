import Head from "next/head"
import styled from "styled-components"
import Navbar from "../../components/Navbar"

const SessionStyle = styled.div`
padding: 0 20px;
display: flex; 
justify-content: center;
align-items: center;
text-align: center;
font-family: "Helvetica";
height: 100vh;
flex-direction: column;

width:  80vw;
margin-left: 20vw;

.question{
    border: 1px solid var(--black);
    font-size: 1.2rem;
    padding: 20px;
    width: 900px;
    height: auto;

}

button[type='submit'] {
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
export default function Session() {
    return (
        <>
        <Head>
        <title>Session</title> 
        <meta name = "description" content = "Generated by create next app" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <link rel = "icon" href = "/favicon.ico" />
        </Head>
        <SessionStyle>
        <Navbar />
        <h1>Session : </h1>
        <div className="questionSession">
            <p>Question n°</p>
            <p className="question">Le sport a-t-il des bienfaits sur la santé ?</p>
            <p>1 / 16</p>


                <button className="next" type="submit">Suivant</button>
                <button className="end" type="submit">J'ai fini</button>

        </div>

        </SessionStyle>
        </>


    )
}