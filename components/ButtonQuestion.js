import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const ButtonQuestionStyle = styled.div`
    width: 20vw;
    .container__button{
        text-align: center;
        background: var(--yellow);
        padding: 30px 50px;
        border-radius: 10px;
    }
`

export default function ButtonQuestion(){
    return (
        <>
        <ButtonQuestionStyle>
            <Link href="#">
            <div className='container__button'>
                <p>Creer un nouveau <br></br>questionnaire</p>
                <Image
                    src='/img/plus.svg'   
                    alt="fleche pour acceder a l'historique de la session"
                    width={20}
                    height={20}
                />
            </div>
            </Link>
        </ButtonQuestionStyle>
        </>
    )
}