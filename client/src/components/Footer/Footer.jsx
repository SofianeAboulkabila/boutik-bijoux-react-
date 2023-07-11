import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Catégories</h1>
                    <span>Bagues</span>
                    <span>Boucles d'oreilles</span>
                    <span>Bracelets</span>
                    <span>Colliers</span>
                </div>
                <div className="item">
                    <h1>Liens</h1>
                    <span>FAQ</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>A propos</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas hic molestias quis eos minus autem nam sed. Eaque impedit, porro quam libero amet quidem possimus iste nobis aperiam perferendis quibusdam.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nostrum quas optio quod perferendis ipsam dolores porro, maxime, ratione, adipisci ducimus veniam nihil repudiandae minus vitae quisquam rerum aspernatur ullam.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Boutik-bijoux</span>
                    <span className="copyright">© Copyright 2023. Tout droits réservés.</span>
                </div>
                <div className="right">
                    <img src="./img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer