"use client"
import { getPrismicClient } from '@/services/prismic';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import BannerProjeto from '@/components/BannerProjeto';
import { ProjetoContainer } from '@/styles/projetoStyles';


export default function Projeto() {
  const [projeto, setProjeto] = useState<any>({})

  const params  = useParams();
  const { slug }: any = params;

  const fetchData = async () => {
    const prismic = getPrismicClient();
  
    const response = await prismic.getByUID('portfolio', String(slug), {});
  
    const projeto = {
      slug: response.uid,
      title: response.data.title,
      type: response.data.type,
      description: response.data.description,
      link: response.data.link.url,
      thumbnail: response.data.thumbnail.url
    };

    setProjeto(projeto)
  
  }

  useEffect(() => {
      fetchData();
  }, [])

  if(slug === null){
    return <LoadingScreen />
  }


  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      /> 

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

