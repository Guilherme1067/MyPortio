import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import facebookIcon from '../assets/facebook.svg'
import x from '/assets/icons/x.svg'

const arrayOfLinks = ["About", "Works", "Experiences", "Contact me"]

interface MobileMenuProps {
  setMenuStatus: (isOpen: boolean) => void;
}

export function MobileMenu({ setMenuStatus }: MobileMenuProps) {

  return (
    <div className='w-100vh h-[100vh] z-100000000000000000'>
      <div className='flex justify-between items-center px-8 py-8' >
        <div className="flex" >
          <p className="text-white font-bold font text-base">GUILHERME</p>
          <p className="text-yellow font-bold text-base">REIS</p>
        </div>
        <img src={x} onClick={() => setMenuStatus(false)} alt="Close mobile menu icon" />
      </div>

      <nav className="flex flex-col items-center gap-12 text-base pt-12 text-white">
        {arrayOfLinks.map(link => {
          return (
            <div key={link} className='flex hover:border-b-[2px] rounded-sm hover:animate-pulse border-yellow '>
              <a onClick={() => setMenuStatus(false)} title={`Link to the ${link} section (internal link)`} href={`#${link}`}>{link}</a>
            </div>
          )
        })}
      </nav>
      <ul className="flex items-center justify-center gap-4 pt-32">
        <li className='group '>
          <a title="Link to my linkeding perfil(external link)" className="" href="https://www.linkedin.com/in/guireiss/" target="_blank">
            <img src={linkedinIcon} alt="linkedin logo" />
          </a>
        </li>
        <li><a title="Link to my github perfil(external link)" className="" href="https://github.com/Guilherme1067" target="_blank"><img alt="github logo" src={githubIcon} /></a></li>
        <li ><a title="Link to my instagram perfil(external link)" className="" href="https://www.instagram.com/guilhermedrs_/" target="_blank"><img src={facebookIcon} alt="instagram logo" /></a></li>
      </ul>
    </div>
  )
}