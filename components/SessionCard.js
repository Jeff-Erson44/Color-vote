import Link from 'next/link'
import styled from 'styled-components'

const SessionCardStyled = styled.div`
    .container__sessionCard{
        width: 350px;
        border-radius: 10px;
        padding : 10px 30px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.175);
        &--info{
            p:nth-child(1){
                margin-bottom: 10px;
            }
            p:nth-child(2){
                font-family: 'Poppins';
                font-weight: 600;
                margin-bottom: -5px;
            }
            p:nth-child(3){
                margin-bottom: 25px;
            }
        }
        &--button{
            display: flex;
            justify-content: flex-end;
            p{
                padding: 10px 20px;
                border: 1px solid var(--yellow);
                border-radius: 10px;
            }
        }
    }
`

export default function SessionCard(){
    return(
        <>
        <SessionCardStyled>
            <div className="container__sessionCard">
                <div className="container__sessionCard--info">
                    <p>3 Jan 2022</p>
                    <p>Association sportive</p>
                    <p>16 participans</p>
                </div>
                <div className="container__sessionCard--button">
                    <p>
                        <Link
                            href="#">
                            Voir plus
                        </Link>
                    </p>
                </div>
            </div>
        </SessionCardStyled>
        </>
    )
}