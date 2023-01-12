import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const HomeStyle = styled.div`

height: 100vh;
text-align: center;
font-family: 'Helvetica';
padding: 20px;

.button__section{
  margin-top: 50px;
  .admin__button, .user__button{
    background-color: var(--white);
    border: 1px solid var(--black);
    padding: 15px 20px;
    width: 180px;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
      background-color: var(--black);
      color: var(--white);
    }
  }


  .admin__button{
    margin-right: 10px;
  }

  .user__button{
    margin-left: 10px;
  }
}

form{
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
  input{
    width: 550px;
    border-radius: 8px;
    padding: 15px 20px;
    border: 1px solid var(--black);
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
}
@media(max-width: 768px){
  input{
    width: 100%!important;

  }
  .admin__button, .user__button{
    width: 130px!important;
  }
}

` 
export default function Home() {
  const router = useRouter()
  const [loginChoice, setLoginChoice] = useState('user')

  const [inputedAdmin, setInputedAdmin] = useState({
    username:"",
    password:""
  })
  const [inputedUser, setInputedUser] = useState({
    lastName:"",
    firstName:"",
    code:""
  })

  // fonction qui permet de connecté l'admin
  const handleSignInAdmin = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/auth/signInAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: inputedAdmin.username,
          password: inputedAdmin.password
        }),
      });
      console.log(res, 'fgd,j,');
      const data = await res.json();
      if(res.ok){
        console.log('connecté');
        router.push('/dashboard')
      }else{
        console.log('pas connecté')
      }
  }

  const handleSignInUser = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/auth/signInUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: inputedUser.firstName,
          lastName: inputedUser.lastName,
          code: inputedUser.code
      }),
    });
    console.log(res, 'user');
    if(res.ok){
      console.log('connecté');
      router.push('/vote')
    }else{
      console.log('pas connecté')
    }
  }

  return (
    <>
    <HomeStyle>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        <Image 
          src="/img/ColorVote.png"
          width={180}
          height={150}
          alt="ColorVote"
        />
      </h1>

        <h2>Vous etes ?</h2>

        <div className='button__section'>
          <button 
            className={`user__button ${loginChoice == 'user' ? 'active' : ''}`}  
            onClick={() => setLoginChoice('user')}>
            Utilisateur
          </button>
          <button 
            className={`user__button ${loginChoice == 'admin' ? 'active' : ''}`}  
            onClick={() => setLoginChoice('admin')}>
            Admin
          </button>
        </div>

        {loginChoice === 'user' ? (
          <>  
            <form onSubmit={handleSignInUser}>
              <input
                type="text"
                id="firstname" 
                name='firstname' 
                placeholder='Prénom'
                value={inputedUser.firstName || ''} 
                onChange={(e) => setInputedUser({ ...inputedUser, firstName: e.target.value })}
                required
              />
              <input
                type="text"
                id="lastname" 
                name='lastname' 
                placeholder='Nom'
                value={inputedUser.lastName || ''} 
                onChange={(e) => setInputedUser({ ...inputedUser, lastName: e.target.value })}
                required
              />
              <input 
                type="text" 
                id='pinNumber' 
                name='pinNumber' 
                placeholder='Code PIN'
                value={inputedUser.code || ''} 
                onChange={(e) => setInputedUser({ ...inputedUser, code: e.target.value })}
                required
              />
              <button 
                type='submit' 
                className='login__button'>
                Se connecter
              </button>
            </form>
          </>
        ):(
          <>
            <form onSubmit={handleSignInAdmin}>
              <input
                type="text"
                id="username" 
                name='username' 
                placeholder='Nom utilisateur'
                value={inputedAdmin.username || ''} 
                onChange={(e) => setInputedAdmin({ ...inputedAdmin, username: e.target.value })}
                required
              />
              <input 
                type="password" 
                id='assword' 
                name='password' 
                placeholder='Mot de passe'
                value={inputedAdmin.password || ''} 
                onChange={(e) => setInputedAdmin({ ...inputedAdmin, password: e.target.value })}
                required
              />
              <button 
                type='submit' 
                className='login__button'>
                Se connecter
              </button>
          </form>
          </>
        )}

          
      </HomeStyle>
    </>
  )
}