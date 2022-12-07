import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import facebookIcon from '../assets/facebook.svg'

export function Header() {
  return (
    <header className="flex justify-around mt-14 z-50 relative">
      <div className="flex" >
        <p className="text-white font-bold font text-base">GUILHERME</p>
        <p className="text-yellow font-bold text-base">REIS</p>
      </div>
      <nav className="text-base text-white flex gap-12">
        <a href="#info">About</a>
        <a href="#jobs">Experiences</a>
        <a href="#">Contact me</a>
      </nav>

      <ul className="flex gap-6">
        <li><a href="https://www.linkedin.com/in/guireiss/" target="_blank"><img title="Link para o linkedin (link externo)" src={linkedinIcon} alt="linkedin logo" /></a></li>
        <li><a href="https://github.com/Guilherme1067" target="_blank"><img title="Link para o github (link externo)" alt="github logo" src={githubIcon} /></a></li>
        <li><a href="https://www.instagram.com/guilhermedrs_/" target="_blank"><img title="Link para o instagram (link externo)" src={facebookIcon} alt="instagram logo" /></a></li>
      </ul>
    </header>
  )
}