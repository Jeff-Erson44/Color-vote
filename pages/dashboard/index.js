import Navbar from '../../components/Navbar'
import styled from'styled-components'
import LastView from '../../components/LastView'
import LastSession from '../../components/LastSession'
import ButtonQuestion from '../../components/ButtonQuestion'


const DashboardStyle = styled.div`
    width: 80vw;
    margin-left: 20vw;
    padding: 15px 30px;
    .container__dashboard{
        &--highlight{
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            h1{
                font-family: 'Helvetica-Bold';
            }
            p{
                font-family: 'Helvetica';
                span{
                    font-family: 'Helvetica-Bold';
                }
            }
        }
        &--items{
            display: flex;
            gap: 25px;
            align-items: center;
        }
    }
    h2{
        font-family: 'Helvetica-Bold';
    }
`


export default function Dashboard() {
    return(
        <>
            <Navbar />
        <DashboardStyle>
                <div className='container__dashboard--highlight'>
                    <h1>Tableau de bord</h1>
                    <p>Vous etes connecte en tant <br></br> qu'<span>Admin</span></p>
                </div>

                <h2>Resultat du dernier questionnaire</h2>
                <div className='container__dashboard--items'>
                    <div>
                        <LastView/>
                    </div>
                    <div>
                        <ButtonQuestion/>
                    </div>
                </div>
                
                
                <h2> Historique des dernieres sessions</h2>
                <LastSession/>

                
        </DashboardStyle>
        </>
    )
}