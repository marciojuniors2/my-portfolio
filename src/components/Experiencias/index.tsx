import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Years" description="of Experience Professional" />

      <section>
        <ExperienciaItem
          year="May 2022 - Agust 22"
          empresa="Koode Ltda"
          title="Dev Full-Stack"
          description=".Net, Asp-net, React.ts with tailwind.css, and RPA, Azure, Excel, Teams"
        />
        <ExperienciaItem
          year="Dec 22 to July 23 "
          empresa="NextCoders"
          title="Dev Full-Stack"
          description=".Net Core, React.ts with mui material, context and hooks,  
           Cloud: Azure, Excel, Teams"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
