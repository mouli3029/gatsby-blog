import React from 'react'

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from './nav/Navbar';

import '../styles/index.scss'
const Layout= (props) => {
    return (
        <div>
            <Navbar/>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
