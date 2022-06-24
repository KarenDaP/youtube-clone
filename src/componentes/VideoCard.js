import React from 'react'
import './estilos/VideoCard.css'

function VideoCard( {image, title, channel, views, timestamp, channelImage} ) {
  return (
    <article className='section_article-cardVideoR'>
        <img src={image} alt="foto" className='article_img-cardVideoR'/>
        <div className='article_div-fototitulo'>
            <img src={channelImage} alt={channel} className='article_div_img-channelImage'/>
            <h4 className='article_div_h4-fototitulo'>{title}</h4>
        </div>
        <div className='article_div-info'>
            <p className='article_div_p-info'>{channel}</p>
            <p className='article_div_p-info'>{views}</p>
            <p className='article_div_p-info'>{timestamp}</p>
        </div>
    </article>
  )
}

export default VideoCard