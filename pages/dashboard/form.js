import styled from "styled-components"
import Head from "next/head"
import Navbar from "../../components/Navbar"

const FormStyle = styled.div `
font-family: 'Helvetica';
padding: 20px;
width: 80vw;
margin-left: 20vw;
h1{
    text-align: center;
}

form{
    margin: 20px;
    text-align: center;
    input{
        width: 100%;
        padding: 15px 20px;
    }

}

button[type='submit'] {
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
export default function form() {
    return ( 
        <>
        <FormStyle >
        <Head>
        <title>ColorVote</title> 
        <meta name = "description" content = "Generated by create next app" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <link rel = "icon" href = "/favicon.ico" />
        </Head> 
        <Navbar />
        <h1> Créer un questionnaire </h1>

        <form action = "POST" >
        <input type = "text"
        placeholder = "Le sport a-t-il des bienfaits sur la santé ?" />

        <button type="submit">Ajouter</button>
        </form> 


        <h2>Les questions :</h2>
        
        <button type="submit">Suivant</button>
        </FormStyle> 
        </>
    )
}