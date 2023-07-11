"use client"
import ProjetoItem from '@/components/ListProjects';
import Header from '../../components/Header';
import { ProjetosContainer } from '../../styles/ProjetosStyle';

import Prismic from 'prismic-javascript';
import { getPrismicClient } from '@/services/prismic';
import { useState, useEffect } from 'react';

export default function Projetos() {
  const [projetos, setProjetos] = useState<any[]>([])

const getProjects = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
      [Prismic.Predicates.at('document.type', 'portfolio')],
      { orderings: '[document.first_publication_date desc]'}
    );

     const projetos = projectResponse.results.map(projeto => ({
      slug: projeto.uid,
      title: projeto.data.title,
      type: projeto.data.type,
      description: projeto.data.description,
      link: projeto.data.link.url,
      thumbnail: projeto.data.thumbnail.url
     }));

     setProjetos(projetos)
}

useEffect(() => {
  getProjects();
}, []);

  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
      {Array.isArray(projetos) ? (
        projetos.map((projeto) => (
        <ProjetoItem
          key={projeto.slug}
          title={projeto.title}
          type={projeto.type}
          slug={projeto.slug}
          imgUrl={projeto.thumbnail}
        />
        ))
         ) : (
        <p>No projects available.</p>
      )}
    </main>
    </ProjetosContainer>
  );
}


