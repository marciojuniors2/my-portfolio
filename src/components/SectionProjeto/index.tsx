import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface Iprojeto {
  slug: string,
  title: string,
  description: string,
  type: string;
  link: string,
  thumbnail: string;
}

export interface ProjetosProps {
  projetos: Iprojeto[];
}

export function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title='Latest projects' />
      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}

      </section>
    </Container>
  );
}
export default Projetos;
