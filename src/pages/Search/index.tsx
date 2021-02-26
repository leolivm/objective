import React, { useState, FormEvent } from "react";
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
  Wrapper,
  List,
  TitleContent,
  Title,
  HeroWrapper,
  HeroCharacter,
  HeroSeries,
  HeroEvents,
  Footer,
} from "./styles";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";
import api from "../../services/api";

const Seach: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [heroes, setHeroes] = useState<any[]>([]);
  const privateKey = env.APP_PRIVATE_API_KEY;
  const publicKey = env.APP_PUBLIC_API_KEY;

  async function handleSearch(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const timeStamp = Date.now().toString();
    const offset = Math.floor(Math.random() * 1500 + 1);
    const toBeHashed = `${timeStamp}${privateKey}${publicKey}`;
    const hashedMessage = MD5(toBeHashed);

    const response = await api.get(
      `/characters?limit=10&offset=${offset}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashedMessage}`
    );

    setHeroes(response.data.data.results);
    console.log(response.data.data.results);
  }

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

          <Wrapper>
            {heroes.map((hero) => (
              <Link key={hero.id} to="/detail">
                <HeroWrapper>
                  <HeroCharacter>
                    <img
                      src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                      alt="Hero"
                    />
                    <span>{hero.name}</span>
                  </HeroCharacter>
                  <HeroSeries>
                    <span>Iron Man: Armor Wars</span>
                    <span>Old Man Hawkeye</span>
                    <span>
                      Fantastic four Visionaries: Walter Simonson Vol. 1
                    </span>
                  </HeroSeries>
                  <HeroEvents>
                    <span>AvX</span>
                    <span>Demon in the Bottle</span>
                    <span>Dynasty M</span>
                  </HeroEvents>
                </HeroWrapper>
              </Link>
            ))}
          </Wrapper>
        </List>
      </Content>
      <Footer>
        <Link to="/">1</Link>
        <Link to="/">2</Link>
        <Link to="/">3</Link>
        <Link to="/">4</Link>
        <Link to="/">5</Link>
      </Footer>
    </Container>
  );
};

export default Seach;
