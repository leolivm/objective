import React, { useCallback, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import env from "react-dotenv";
import { MD5 } from "crypto-js";
import { MdSearch } from "react-icons/md";
import {
  Container,
  Header,
  Content,
  Profile,
  Form,
  Search,
  List,
  TitleContent,
  Title,
  HeroWrapper,
  HeroCharacter,
  HeroSeries,
  HeroEvents,
} from "./styles";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";
import photo from "../../assets/photo.png";
import api from "../../services/api";

interface Hero {
  data: {
    results: [
      name: string,
      thumbnail: {
        extension: string;
        path: string;
      }
    ];
  };
}

const Seach: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const privateKey = env.APP_PRIVATE_API_KEY;
  const publicKey = env.APP_PUBLIC_API_KEY;

  const handleSearch = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      const timeStamp = Date.now().toString();
      const offset = Math.floor(Math.random() * 1500 + 1);
      const toBeHashed = `${timeStamp}${privateKey}${publicKey}`;
      const hashedMessage = MD5(toBeHashed);

      const response = await api.get<Hero>(
        `/characters?limit=10&offset=${offset}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashedMessage}`
      );

      setHeroes([response.data]);
    },
    [privateKey, publicKey]
  );

  return (
    <Container>
      <Header>
        <nav>
          <img src={logo} alt="Objective" />
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Leandro Martins</strong>
              <span>Teste de Front-end</span>
              <p>LM</p>
            </div>
          </Profile>
        </aside>
      </Header>

      <Content>
        <h1>Busca de personagens</h1>
        <Search>
          <span>Nome do personagem</span>
          <div>
            <Form onSubmit={handleSearch}>
              <input
                name="seach"
                type="seach"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button icon={MdSearch} type="submit" />
            </Form>
          </div>
        </Search>

        <List>
          <TitleContent>
            <Title>Personagem</Title>
            <Title>Séries</Title>
            <Title>Eventos</Title>
          </TitleContent>
          <Link to="/detail">
            <HeroWrapper>
              <HeroCharacter>
                <img src={photo} alt="Hero" />
                <span>Abner Jenkins</span>
              </HeroCharacter>
              <HeroSeries>
                <span>Iron Man: Armor Wars</span>
                <span>Old Man Hawkeye</span>
                <span>Fantastic four Visionaries: Walter Simonson Vol. 1</span>
              </HeroSeries>
              <HeroEvents>
                <span>AvX</span>
                <span>Demon in the Bottle</span>
                <span>Dynasty M</span>
              </HeroEvents>
            </HeroWrapper>
          </Link>
        </List>
      </Content>
    </Container>
  );
};

export default Seach;
