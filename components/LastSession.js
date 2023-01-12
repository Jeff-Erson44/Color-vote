import styled from 'styled-components'
import Image from 'next/image'

const LastSessionStyle = styled.section`
    width: 50vw;
    padding-left: 30px;
    h2{
        font-family: 'Helvetica-Bold';
        margin: 50px 0 30px 0;
    }
    .container__lastSession{
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        padding: 10px 25px;
        &--info{
            display: flex;
            gap: 30px;
            p:first-of-type{
                font-family: 'Helvetica-Bold';
            }
        }
    }

`

export default function LastSession(){
    return(
        <>  
        <LastSessionStyle>
            <section className='container__lastSession'>
                <div className='container__lastSession--info'>
                    <p>20.01.23</p>
                    <p>Nom de la session</p>
                </div>
                <Image
                    src='/img/fleche.svg'
                    alt="fleche pour acceder a l'historique de la session"
                    width={20}
                    height={20}
                />
            </section>
        </LastSessionStyle>
        </>
    )
}