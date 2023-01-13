import Head from "next/head";
import styled from "styled-components"
import NavbarUser from "../../components/NavbarUser"
import Link from "next/link";

const IndexStyle = styled.div`
.session{
    height: 60vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
button {
    background-color: var(--yellow);
    border: 1px solid var(--yellow);
    padding: 15px 35px;
    font-family: 'Helvetica';
    text-align: center;
    border-radius: 5px;
    display: block;
    margin: 20px auto;
    cursor: pointer;
    &:hover{
        background-color: var(--white);
        border: 1px solid var(--black);
    }

}
`

export default function Index(){
    return(
        <>
        <IndexStyle>
        <Head>
        <title>ColorVote</title> 
        <meta name = "description" content = "Generated by create next app" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <link rel = "icon" href = "/favicon.ico" />
        </Head>
        <NavbarUser />
        <div className="session">
        <h1>Session </h1>

        <p>40 questions</p>
        <p>À chaque question, sélectionner une réponse.</p>
        
        <button>Commencer</button>
        </div>
        </IndexStyle>
        </>
    )
}