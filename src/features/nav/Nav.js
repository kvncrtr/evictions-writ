"use client";

import { useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import icon from "../../../public/Icon.png";

export function Nav() {
   const [open, setOpen] = useState(false);

   const handleOpen = () => setOpen(!open);
  
   return (
      <header className={styles.navContainer}>
         <div className={styles.navLogo}>
            <Image alt="EJ&UW Logo" src={icon} width={36} hieght ={36} />
            <p className={styles.navLogoText}>EJ&UW</p>
         </div>

         <nav className={`${styles.navLinks} ${open ? styles.open : ""}`}>
            <a href="#home" onClick={() => handleOpen()}>Home</a>
            <a href="#about" onClick={() => handleOpen()}>About</a>
            <a href="#services" onClick={() => handleOpen()}>Services</a>
            <a href="#contact" onClick={() => handleOpen()}>Contact</a>
         </nav>

         <button className={styles.navToggle} onClick={() => handleOpen()}>
            ☰
         </button>
      </header>
   );
}
