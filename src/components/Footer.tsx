import Image from 'next/image'
import Logo from '../assets/logo.svg'
import Insta from '../assets/instagram.svg'
import X from '../assets/twitter.svg'
import Tictok from '../assets/tiktok.svg'

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
      <Image
        src={Logo}
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src={Tictok}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={Insta}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={X}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  )
}

export default Footer
