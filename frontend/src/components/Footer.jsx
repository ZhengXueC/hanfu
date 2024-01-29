import { useTranslation } from "react-i18next";
const Footer = () => {
  const{t} = useTranslation()
  return (
      <footer
          className=' w-[100%] h-16 bg-[#222] text-white flex justify-center items-center'>
          <p>© 2024 <span style={{color: '#4a714a'}}> HanfuTale </span>{t('All_rights_reserved')} </p>
   </footer>
  )
}

export default Footer