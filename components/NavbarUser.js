import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"


const NavbarUserStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 50px;

    font-family: "Poppins";
    nav{
        display: flex;
    li{
        list-style-type: none;
    }
    p{
        margin: 2px 0;
        padding-left: 10px;
        cursor: pointer;
    }
    
}
`
export default function NavbarUser(){
    return(
        <>
        <NavbarUserStyle>
            <Image src="/img/ColorVote.png"
                            alt="logo"
                            width={130}
                            height={100}/>
            <nav>
            <Image
                            src="/img/logout.svg"
                            alt="logo accueil tableau de bord"
                            width={21}
                            height={21}
                        />
                <Link href="/index">
                    <p>Quitter la session</p>
                    </Link>
            </nav>
        </NavbarUserStyle>
        </>
    )
}