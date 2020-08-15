import React from 'react'
import airPodImageBg from '../../assits/images/item_2973007_779.jpg'
import './Footer.css'
import BackToTop from '../BackToTop'

export default function Footer() {
    return <div className="Footer">
        <img 
        src={airPodImageBg} 
        width="100%" 
        alt="footer-background"/>
        <BackToTop />
    </div>
}