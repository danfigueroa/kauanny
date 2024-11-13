import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'Sobre nós',
            'link' : '/'
        },
        {
            'name' : 'Serviços Dentais',
            'link' : '/'
        },
        {
            'name' : 'Dentista',
            'link' : '/'
        },
        {
            'name' : 'Blogs',
            'link' : '/'
        },
        {
            'name' : 'FAQs',
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Whatsapp',
            'info': '73 9999-9999',
            'icon': call
        },
        {
            'title': 'Horário de Funcionamento',
            'info': '09:00 AM - 18:00 PM',
            'icon': time
        },
        {
            'title': 'Onde Atendo',
            'info': '35 West Dental Street California 1004',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Atendimento dentário humanizado para você e seus filhos.</p>

                        <div className="social-logo">
                            <p>Redes Sociais</p>
                            <ul>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Links Rápidos</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contato e Informações</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Kauanny Dinamarca. Todos os direitos reservados</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Termos de Uso</Link></li>
                            <li><Link to='/'>Política de Privacidade</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;