import Navbar from '../../components/Navbar'
import styled from'styled-components'

const DashboardStyled = styled.section`
    width: 80vw;
    margin-left: 20vw;
`
export default function Dashboard() {
    return(
        <>
            <Navbar />

            <DashboardStyled>
                <h1>Tableau de bord</h1>
                <h2>Résultats du dernier questionnaire</h2>

                <h3>Vous êtes connecté en tant qu'Admin</h3>
            </DashboardStyled>
        </>
    )
}