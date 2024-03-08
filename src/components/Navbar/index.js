import React, { useState } from 'react'
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.gif"

const Nav = styled.div`
background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
height: 70px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
z-index: 10;
@media screen and (max-width: 1080px) {
    top: 0;
    width: 100%;
    transition: 2s all ease;
}
`;

const NavContainer =styled.div`
    display: flex;
    justify-content: space-between:
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width:200px;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px){
        padding: 0 0px;
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 40px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    font-size: 17px;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.bgLight};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  margin-top:17px;
  border: 1.8px solid ${({ theme }) => theme.text_primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    :hover {
      background: ${({ theme }) => theme.black};
      color: ${({ theme }) => theme.white}; 

    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top:60px;
    right:0px;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.3s ease-in-out;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;



const MobileMenuLinks = styled(LinkR)`
    color: ${({theme})=> theme.text_primary};
    font-weight: 500;
    cursor:pointer;
    text-decoration: none;
    transition: all 0.2 ease-in-out;
    &:hover{
        color:${({theme})=> theme.primary};
    }
`;
const Image = styled.img`
  width: 60px;
  height: 60px;
  
`;

const Navbar = () =>{
    const [open,setOpen] = useState(false);
    const handleMenuItemClick = (sectionId) => {
        setOpen(false); // Close the menu when a menu item is clicked
        // Scroll to the corresponding section
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    };
    return (<Nav>
        <NavContainer>
            <NavLogo to='/'>
            <Image src= {logo} />
            </NavLogo>
            <MobileIcon>
                <FaBars 
                onClick= {() =>{
                    setOpen(!open);
                }}
                />
            </MobileIcon>
            <NavItems>
                <NavLink href="#About">About</NavLink>
                <NavLink href='#Skills'>Skills</NavLink>
                <NavLink href='#Projects'>Projects</NavLink>
                <NavLink href='#Education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <GitHubButton href="https://github.com/kakarotv" target="_blank">Github Profile</GitHubButton>
            </ButtonContainer>
        </NavContainer>
        {open && (
                <MobileMenu>
                    <MobileMenuLinks
                        href='#About'
                        onClick={() => handleMenuItemClick("About")}
                    >
                        About
                    </MobileMenuLinks>
                    <MobileMenuLinks
                        href="#Skills"
                        onClick={() => handleMenuItemClick("Skills")}
                    >
                        Skills
                    </MobileMenuLinks>
                    <MobileMenuLinks
                        href="#Projects"
                        onClick={() => handleMenuItemClick("Projects")}
                    >
                        Projects
                    </MobileMenuLinks>
                    <MobileMenuLinks
                        href="#Education"
                        onClick={() => handleMenuItemClick("Education")}
                    >
                        Education
                    </MobileMenuLinks>
                    <GitHubButton 
                    style={{
                        padding:"10px 16px",
                        background: `${({ theme }) => theme.primary}`,color:"white",
                        width:"max-content",
                    }}
                    href="https://github.com/kakarotv" target="_blank">
            Github Profile
          </GitHubButton>
                </MobileMenu>
            )
        }
    </Nav>);
};

export default Navbar