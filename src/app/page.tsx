import styles from "./page.module.css";
import { Nav } from "../features/nav/Nav";
import { Hero } from '../features/hero/Hero';
// import PainPoints from '../features/painPoints/PainPoints';
// import GuideBenefits from '../features/guideBenefits/GuideBenefits';
// import Testimonials from '../features/testimonials/Testimonials';
// import FounderStory from '../features/founderStory/FounderStory';
// import FinalCTA from '../features/finalCTA/FinalCTA';

export default function HomePage() {
  return (
    <main className={styles.homeContainer}>
      <Nav />
      <Hero />
      {/* 
      <PainPoints />
      <GuideBenefits />
      <Testimonials />
      <FounderStory />
      <FinalCTA /> */}
    </main>
  );
}