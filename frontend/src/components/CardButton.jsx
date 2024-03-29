import {AiOutlineUserAdd, AiOutlineUserDelete} from 'react-icons/ai'
import { useTranslation } from "react-i18next";
import { useUserContext } from '../context/usercontext'
const CardButton = () => {
  const {loginWithRedirect, isAuthenticated, logout} = useUserContext()
  const{t} = useTranslation()
  return (
    <div className="CardButton" onClick={() => {
      isAuthenticated ? logout({ returnTo: window.location.origin }) : loginWithRedirect()
    }}>
    <h3 style={{color: '#102a42'}} className='flex items-center text-2xl gap-1 cursor-pointer'>
        {
          isAuthenticated ? t('Logout') : t('Login')
        }
      <span>
        {
            isAuthenticated ? <AiOutlineUserDelete /> : <AiOutlineUserAdd />
        }
      </span>
    </h3>
  </div>
  )
}

export default CardButton;
