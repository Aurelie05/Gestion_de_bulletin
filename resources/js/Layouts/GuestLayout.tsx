import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import '@/style/Guestlayout.css';
import Logo from'@/assets/Icon.png'

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="guestcontainer">
            <div className='barmenu'>

                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>

                <div className='text'>
                    <div className='textmenu1'>Accueil</div>
                    <div className='textmenu2'>Contactez-Nous</div>
                    <div className='textmenu3'><button>Se connecter</button></div>
                </div>

            </div>

            <div className="guestchildren">
                {children}
            </div>
        </div>
    );
}
