import React from 'react'

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from './nav/Navbar';

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
const Layout= (props) => {
    return (
        <div>
        <Navbar/>
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
            
            <Footer/>
        </div>
        </div>
    )
}
export default Layout
