"use client"
import React, { useEffect, useState } from 'react'
import { HomeContainer } from "@/styles/HomeStyles";
import HomeHero from "@/components/HomeHero";
import Header from "@/components/Header";
import Experiencias from "@/components/Experiencias";
import Footer from "@/components/Footer";
import Projetos from "@/components/SectionProjeto";
import Conhecimentos from "@/components/Conhecimentos";
import FormContato from "@/components/FormContato";

import Aos from 'aos';
import 'aos/dist/aos.css'

import Prismic from 'prismic-javascript';
import { getPrismicClient } from "@/services/prismic";

// 345600

export default function Home() {
  const [projetos, setProjetos] = useState<any[]>([])

  const fetchData = async () => {
    const prismic = getPrismicClient();

    const projectResponse = await prismic.query(
      [Prismic.Predicates.at('document.type', 'portfolio')],
      { orderings: '[document.first_publication_date desc]'}
    );
    
    const projects = projectResponse.results.map(projeto => ({
      slug: projeto.uid,
      title: projeto.data.title,
      type: projeto.data.type,
      description: projeto.data.description,
      link: projeto.data.link.url,
      thumbnail: projeto.data.thumbnail.url
     }));
     
     setProjetos(projects)
  } 

    
  useEffect(() => {
    fetchData();
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <main className='container'>
        <Header />
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projetos} />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}


