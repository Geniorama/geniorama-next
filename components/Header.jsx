import styles from './../styles/Header.module.css'
import LogoDark from './../public/logo/logo-geniorama-02.svg'
import Image from 'next/image'
import Link from 'next/link'
import MenuPrincipal from '../menus/menuPrincipal.json'
import React, { useEffect } from 'react'


export default function Header(){
    useEffect(() => {
        const header = document.getElementById('gen-header')
        const stickyClass = styles.genHeader__sticky
        window.addEventListener('scroll', function(){
            if(scrollY > 200){
                header.classList.add(stickyClass)
            } else {
                header.classList.remove(stickyClass)
            }
        })
    },[])
    const openMenu = (e) => {
        const gen_menu = document.getElementById('gen-menu')
        const active_class = styles.genNavActive

        gen_menu.classList.add(active_class)
    }

    const closeMenu = (e) => {
        const gen_menu = document.getElementById('gen-menu')
        const active_class = styles.genNavActive

        gen_menu.classList.remove(active_class)
    }

    return(
        <header id='gen-header' className={styles.genHeader}>
            <div className="container">
                <nav className='d-flex align-items-center justify-content-between'>
                    <Link href="/">
                        <a>
                            <Image 
                                src={LogoDark}
                                width={150}
                                height={80}
                            />
                        </a>
                    </Link>
                    
                    <button id='gen-btn-toggle-nav' onClick={openMenu} className={styles.genButtonNav} role="button">
                        <span className={styles.genButtonNav__line}></span>
                        <span className={styles.genButtonNav__line}></span>
                        <span className={styles.genButtonNav__line}></span>
                    </button>
                </nav>
            </div>

            <nav id='gen-menu' className={`${styles.genNav}`}>
                <div className={`container ${styles.genNavContainer}`}>
                    <button className={`${styles.genNavBtnClose}`} onClick={closeMenu}>
                        <span className={styles.genNavBtnClose__line}></span>
                        <span className={styles.genNavBtnClose__line}></span>
                    </button>
                    <ul className="nav flex-column justify-content-center align-items-center">
                        {MenuPrincipal.map(item=>(
                            <li key={item.id} className="nav-item">
                                <Link href={item.link}>
                                    <a className="nav-link">{item.title}</a>
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}