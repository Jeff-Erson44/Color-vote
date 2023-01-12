import Image from'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const LastViewStyle = styled.section`
    width: 50vw;
    padding-left: 30px;
    .container__view{
        display: flex;
        background: #F2F1F1;
        padding: 25px;
        border-radius: 10px;
        gap: 40px;
        &--info{
            p:first-of-type{
                margin-bottom: 40px;
            }
        }
        &--button{
            margin-left: 100px;
            p{
                background: var(--yellow);
                width: 150px;
                text-align: center;
                padding: 15px 45px;
                border-radius: 10px;
                font-family: 'Helvetica-Bold';
                font-size: .875rem;
            }
        }
    }
`

export default function LastView(){
    return (
        <>
        <LastViewStyle>
            <section className='container__view'>
                <div className='container__view--image'>
                    <Image
                        src='img/graph.svg'
                        alt='graph derniere session'
                        width={120}
                        height={120}
                    />
                </div>
                <div className='container__view--info'>
                    <p>Session termine</p>
                    <p>Nombre de questions : </p>
                    <p>Nombre de participants :</p>
                </div>
                <div className='container__view--button'>
                    <p>
                        <Link href="#">
                        </Link>
                        Voir plus 
                    </p>
                </div>
            </section>
        </LastViewStyle>
        </>
    )
}