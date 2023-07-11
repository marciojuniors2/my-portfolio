import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  empresa: string;
  title: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  empresa,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <h2>{empresa}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
