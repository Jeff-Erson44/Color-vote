import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"

const NavbarStyled = styled.div`
width: 20vw;
height: 100vw;
position: fixed;
top: 0;
left: 0;
background: #ededed;
z-index: 9;
    .container__navbar{
        &--logo{
            margin-bottom: 50px;
        }
        &--items{
            li{
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 30px;
                p{
                    font-family: 'Helvetica-Bold';
                }
            }
        }
    }

`
export default function Navbar(){
    return(
        <>
        <NavbarStyled>
            <nav>
                <ul className="container__navbar--logo">
                    <li>
                        <Image
                            src="/img/ColorVote.png"
                            alt="logo"
                            width={130}
                            height={100}
                        />
                    </li>
                </ul>
                <ul className="container__navbar--items">
                    <li>
                        <Image
                            src="/img/home.svg"
                            alt="logo accueil tableau de bord"
                            width={21}
                            height={21}
                        />
                        <Link href="#">
                            <p>Tableau de bord</p>
                        </Link>
                        
                    </li>
                    <li>
                        <Image
                            src="/img/session.svg"
                            alt="logo accueil tableau de bord"
                            width={21}
                            height={21}
                        />
                        <Link href="/dashboard/historySession">
                            <p>Les sessions</p>
                        </Link>
                    </li>
                    <li>
                        <Image
                            src="/img/logout.svg"
                            alt="logo accueil tableau de bord"
                            width={21}
                            height={21}
                        />
                        <Link href="#">
                            <p>Deconnexion</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </NavbarStyled>
        </> 
    )
}