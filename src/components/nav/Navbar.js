import React from 'react'
import navStyles from '../nav/nav.module.css'
function Navbar() {
    return (
        <div className={navStyles.navbar}>
            <div className={navStyles.nav_left}>
                <h3>Mouli Blogs</h3>
            </div>      
        </div>
    )
}
export default Navbar
