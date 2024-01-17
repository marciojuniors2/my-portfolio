import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/proano4.jpg';
import Image from 'next/image';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>My name is Marcio</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//My apresentation</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Marcio,</span>
            </div>
            <div>
              Surname: <span className="blue">Junior</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Office</span> {'\u007B'}
            <div>
              Function: <span className="blue">Dev Full-Stack,</span>
            </div>
            <div>
              Companies: <span className="blue">Open to opportunities</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
