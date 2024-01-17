import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="03 Years" description="of professional experience" />

      <section>
        <ExperienciaItem
          year="Feb 2022 - Set 22"
          empresa="Koode Ltda"
          title="Dev Full-Stack"
          description=".Net Core, Asp-net, React.ts, tailwind.css, Styled Components and process of automation.
          Clouds: Azure Devops, Excel, Teams"
        />

        <ExperienciaItem
          year="Set 2022 - Set 2023"
          empresa="NextCoders"
          title="Full-Stack Developer"
          description=".NET Core, React.js with Material-UI, utilizing React context for efficient state management and hooks for functional component logic,
          Clouds: Azure Devops, Teams"
        />

        <ExperienciaItem
          year="Set 2023 - (current)"
          empresa="Verzel"
          title="Full-Cycle Developer"
          description=" Backend: .NET Core, Python, Node.js. Front-End: React.ts, Mobile: React-Native and miscellaneous Sql "
        />

      </section>
    </Container>
  );
}

export default Experiencias;
