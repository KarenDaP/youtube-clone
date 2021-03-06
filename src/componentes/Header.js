import React from 'react'
import '../componentes/estilos/Header.css';
import '../componentes/estilos/normalize.css'
import bars from '../componentes/img/bars.JPG'
import lupa from '../componentes/img/lupa2.jpg'
import microfonoPC from '../componentes/img/microfonoPC.JPG'
import fotoPerfil from '../componentes/img/foto perfil.JPG'
import bell from '../componentes/img/bell.JPG'
import grid from '../componentes/img/grid.JPG'
import video from '../componentes/img/video.JPG'

function Header() {
    return (
        <header className='header'>
            <div className="header_div-logo">
                <img
                    className='header_img-bars'
                    src={bars}
                    alt='bars'
                />
                <img
                    className='header_img-logo'
                    src='https://es.logodownload.org/wp-content/uploads/2018/09/youtube-logo-81.png'
                    alt='logo-youtube'
                />
            </div>
            <nav className="header_nav">
                <input className="header_input" type="text" placeholder="busqueda"/>
                <img
                    className='header_img-lupa'
                    src={lupa}
                    alt='lupa'
                /> 
                <img
                    className='header_img-microfono'
                    src={microfonoPC}
                    alt='microfono'
                />     
            </nav>
            <div className="header_div-perfil">    
                <img
                    className='header_img-fotoPerfil img_logo'
                    src={fotoPerfil}
                    alt='fotoPerfil'
                />   
                <img
                    className='header_img-bell img_logo'
                    src={bell}
                    alt='bell'
                /> 
                <img
                    className='header_img-grid img_logo'
                    src={grid}
                    alt='grid'
                /> 
                <img
                    className='header_img-video img_logo'
                    src={video}
                    alt='video'
                />           
            </div>
        </header>
    )
}

export default Header