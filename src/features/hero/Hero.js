"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import logo from "../../../public/hero-logo.png";

// className={styles.hero}
export function Hero() {
   return (
      <section className={styles.heroContainer}>
         <div className={styles.heroLogoCase}>
            <Image 
               className={styles.heroLogo}
               src={logo} 
               alt="hero logo"
               fill
            ></Image>
         </div>

         <p className={styles.heroHeading}>Facing Eviction? You Still Have Options.</p>

         <div className={styles.heroShowCase}>
            <p className={styles.heroSubHeading}>
               This website is not about just evictions this also informs how to inspect a 
               property when buying and or renting to prevent complications and to educate 
               people because knowledge is power. With our 30 years of experience in 
               construction and building main-tenance, and our knowledge of the eviction 
               process, we provide expert consultation to tenants, landlords, homeowners, 
               realtors and investors on eviction mediation.
            </p>

            <button className={styles.heroButton}>Receive Your guide</button>
         </div>
      </section>
   );
}

/*

git add . && git commit -m "" && git push origin feature/hero && git switch main && git pull && git merge feature/hero && git push && git switch feature/hero


*/