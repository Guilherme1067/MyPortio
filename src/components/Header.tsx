import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import facebookIcon from '../assets/facebook.svg'
import menu from '/assets/icons/menu.svg'
import ReactGA from 'react-ga';

import React, { ReactNode } from 'react';

interface HeaderContainerProps {
  children: ReactNode;
}

interface MobileMenuProps {
  setMenuStatus: (isOpen: boolean) => void;
}

const arrayOfLinks = ["About", "Works", "Experiences", "Contact me"]
function NavLinks() {
  return (
    <nav className="hidden sm:flex text-base text-white  gap-12">
      {arrayOfLinks.map(link => {
        return (
          <a key={link} className=' link-hover rounded-sm hover:animate-pulse border-yellow ' onClick={() => ReactGA.event({
            category: link,
            action: 'Clicked on header'
          })} aria-label={`Link to the ${link} section (internal link)`} href={`#${link}`}>{link}</a>
        )
      })}

    </nav>
  )
}

function HeaderLeftSide() {
  return (
    <div className="flex" >
      <p className="text-white font-bold font text-base">GUILHERME</p>
      <p className="text-yellow font-bold text-base">REIS</p>
    </div>
  )
}

function HeaderSocialMediaIcons({ setMenuStatus }: MobileMenuProps) {
  return (
    <ul className="flex items-center sm:flex sm:gap-6">
      <li className='group '>
        <img onClick={() => setMenuStatus(true)} className="inline sm:hidden cursor-pointer" src={menu} />
        <a aria-label="Link to my linkeding perfil(external link)" className="hidden md:inline" href="https://www.linkedin.com/in/guireiss/" target="_blank">
          <img src={linkedinIcon} alt="linkedin logo" />
        </a>
      </li>
      <li><a aria-label="Link to my github perfil(external link)" className="hidden md:inline" href="https://github.com/Guilherme1067" target="_blank"><img alt="github logo" src={githubIcon} /></a></li>
      <li><a aria-label="Link to my instagram perfil(external link)" className="hidden md:inline" href="https://www.instagram.com/guilhermedrs_/" target="_blank"><img src={facebookIcon} alt="instagram logo" /></a></li>
    </ul>
  )
}

function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <header className="flex justify-around mt-14 z-50 relative">
      {children}
    </header>
  )
}

export function Header({ setMenuStatus }: MobileMenuProps) {

  return (
    <>
      <HeaderContainer>
        <HeaderLeftSide />
        <NavLinks />
        <HeaderSocialMediaIcons setMenuStatus={setMenuStatus} />
      </HeaderContainer>
    </>
  )
}