import React, { useState, useEffect, FormEvent } from "react";
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
  NoResult,
} from "./styles";
import { useAuth } from "../../hooks/hero";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";
import api from "../../services/api";

const Seach: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [heroes, setHeroes] = useState<any[]>([]);
  const [recalculate, setRecalculate] = useState(false);
  const [pageNumber, setPageNumber] = useState<Array<number>>([0]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [heroesPerPage] = useState<number>(10);
  const privateKey = env.APP_PRIVATE_API_KEY;
  const publicKey = env.APP_PUBLIC_API_KEY;
  let pages: Array<number> = [];
  const { signIn, deleteItem } = useAuth();

  async function handleSearch(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const timeStamp = Date.now().toString();
    const toBeHashed = `${timeStamp}${privateKey}${publicKey}`;
    const hashedMessage = MD5(toBeHashed);

    const response = await api.get(
      `/characters?nameStartsWith=${searchText}&limit=50&ts=${timeStamp}&apikey=${publicKey}&hash=${hashedMessage}`
    );

    setHeroes(response.data.data.results);
    setRecalculate(true);
  }

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero);

  useEffect(() => {
    if (recalculate === true) {
      for (let i = 1; i <= Math.ceil(heroes.length / heroesPerPage); i++) {
        pages.push(i);
        setRecalculate(false);
      }

      setPageNumber(pages);
    }
  }, [recalculate, heroesPerPage, heroes, pageNumber, pages]);

  const paginate = (page: number) => setCurrentPage(page);

  const nextPage = () => {
    if (currentPage === pageNumber.length) return;
    setCurrentPage(currentPage + 1);
  };

  const prevPage = (page: number) => {
    if (page === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const setId = (id: any) => {
    deleteItem();
    signIn(id);
  };

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
            {currentHeroes.length ? (
              currentHeroes.map((hero) => (
                <Link key={hero.id} to="/detail" onClick={() => setId(hero.id)}>
                  <HeroWrapper>
                    <HeroCharacter>
                      <img
                        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        alt="Hero"
                      />
                      <span>{hero.name}</span>
                    </HeroCharacter>
                    <HeroSeries>
                      {hero.series.items.length ? (
                        hero.series.items
                          .slice(0, 3)
                          .map((serie: any) => (
                            <span key={serie.name}>{serie.name}</span>
                          ))
                      ) : (
                        <span>-</span>
                      )}
                    </HeroSeries>
                    <HeroEvents>
                      {hero.events.items.length ? (
                        hero.events.items
                          .slice(0, 3)
                          .map((e: any) => <span key={e.name}>{e.name}</span>)
                      ) : (
                        <span>-</span>
                      )}
                    </HeroEvents>
                  </HeroWrapper>
                </Link>
              ))
            ) : (
              <NoResult>
                <span>Faça a busca de um personagem Marvel.</span>
              </NoResult>
            )}
          </Wrapper>
        </List>
      </Content>
      <Footer>
        <ul>
          <button
            style={currentPage <= 2 ? { visibility: "hidden" } : {}}
            type="button"
            onClick={() => setCurrentPage(1)}
          >
            {"<<"}
          </button>
          <button
            style={currentPage === 1 ? { visibility: "hidden" } : {}}
            type="button"
            onClick={() => prevPage(currentPage)}
          >
            {"<"}
          </button>
          {pageNumber.map((number: number) => (
            <li key={number}>
              <Link
                onClick={() => paginate(number)}
                to="/"
                style={
                  number === currentPage
                    ? { backgroundColor: "#167ABC", color: "#fff" }
                    : {}
                }
              >
                {number}
              </Link>
            </li>
          ))}
          <button
            style={
              currentPage === pageNumber.length ? { visibility: "hidden" } : {}
            }
            type="button"
            onClick={() => nextPage()}
          >
            {">"}
          </button>

          <button
            style={
              currentPage <= pageNumber.length - 2
                ? {}
                : { visibility: "hidden" }
            }
            type="button"
            onClick={() => setCurrentPage(pageNumber.length)}
          >
            {">>"}
          </button>
        </ul>
      </Footer>
    </Container>
  );
};

export default Seach;
