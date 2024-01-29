import { Link } from 'react-router-dom'
import { useUserContext } from '../context/usercontext'
import { useTranslation } from "react-i18next";
const Links = ({ showMenu, setShowMenu }) => {
  const {myUser} = useUserContext()
  const{t} = useTranslation()
  return (
    <div
    className="text-lg hidden md:flex"
    style={{
      color: '#324d67'  
    }}
    >
    <ul
      className='relative'
    >
        <Link className='link' to='/'>{t('Home')}</Link>
        <Link className='link' to='/about'>{t('About')}</Link>
          <Link className='link' to='/products'>{t('Products')}</Link>
          {myUser && <Link className='link' to='/checkout'>{t('Checkout')}</Link>}
        </ul>
  </div>
  )
}

export default Links