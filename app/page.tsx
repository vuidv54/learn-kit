"use client";

import Introductions from "@/components/modules/Introduction";
import styles from "./page.module.css";
import ListCourse from "@/components/modules/ListCourse";
import AboutStory from "@/components/modules/AboutStory";
import PopularCourse from "@/components/modules/PopularCourse";
import OurTeam from "@/components/modules/OurTeam";
import News from "@/components/modules/News";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className={styles.main}>
      <Introductions />
      <ListCourse />
      <AboutStory />
      <PopularCourse />
      <OurTeam />
      <News />
    </main>
  );
}
