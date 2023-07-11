/* eslint-disable prettier/prettier */
import { DiDotnet, DiDatabase } from 'react-icons/di';
import { FaReact, FaRobot, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiPrisma, SiMui} from 'react-icons/si';
import { TbBrandNextjs, TbDiamondFilled } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Skills" />
      <section>
        <ConhecimentoItem title=".NET" icon={<DiDotnet />} />
        <ConhecimentoItem title="Node.js" icon={<FaNode />} />
        <ConhecimentoItem title="Zod" icon={<TbDiamondFilled />} />
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss />} />
        <ConhecimentoItem title="Next" icon={<TbBrandNextjs />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
      </section>
      <section>
        <ConhecimentoItem title="Typescript" icon={<BiLogoTypescript />} />
        <ConhecimentoItem title="Mui Material" icon={<SiMui />} />
        <ConhecimentoItem title="RPA" icon={<FaRobot />} />
        <ConhecimentoItem title="BdSql" icon={<DiDatabase />} />
        <ConhecimentoItem title="Prisma" icon={<SiPrisma />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
