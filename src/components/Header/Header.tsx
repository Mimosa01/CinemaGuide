import { Logo } from "../Logo/Logo"
import { Container } from "../Container/Container"
import { DesktopNav } from "../DesktopNav/DesktopNav"
import { MobileNav } from "../MobileNav/MobileNav"
import './Header.scss'
import { useState } from "react"
import { SearchInput } from "../SearchComponent/SearchInput"

export const Header = () => {
  const isMobile = window.innerWidth < 576;
  const [isShowSearch, setIsShowSearch] = useState(false);

  const handleToggleSearch = () => {
    setIsShowSearch((prevState) => !prevState);
  } 

  return (
    <header className='header'>
      <Container>
        <div className='header__container' style={{display: isShowSearch && isMobile ? 'none' : 'flex'}}>
          <Logo />
          <DesktopNav />
          <MobileNav onClick={handleToggleSearch}/>
        </div>
      </Container>
      {isShowSearch && <SearchInput />}
    </header>
  )
}
