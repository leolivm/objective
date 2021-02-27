import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MD5 } from "crypto-js";
import env from "react-dotenv";
import { useAuth } from "../../hooks/hero";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import {
  Container,
  Header,
  Profile,
  Content,
  TopInfo,
  History,
  Name,
} from "./styles";

const Detail: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);
  const privateKey = env.APP_PRIVATE_API_KEY;
  const publicKey = env.APP_PUBLIC_API_KEY;
  const { id } = useAuth();

  useEffect(() => {
    const getHeroData = async () => {
      const timeStamp = Date.now().toString();
      const toBeHashed = `${timeStamp}${privateKey}${publicKey}`;
      const hashedMessage = MD5(toBeHashed);

      const response = await api.get(
        `/characters/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hashedMessage}`
      );

      setData(response.data.data.results);
    };

    getHeroData();
  }, [id, privateKey, publicKey]);

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            <img src={logo} alt="Objective" />
          </Link>
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
        {data.map((hero) => (
          <ul key={hero.id}>
            <TopInfo>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
            </TopInfo>

            <History>
              <div>
                <Name>{hero.name}</Name>
                <span>{hero.description ? hero.description : "-"}</span>
                <div>
                  {hero.stories.items ? (
                    hero.stories.items
                      .slice(0, 3)
                      .map((item: any) => <p key={item.name}>{item.name}</p>)
                  ) : (
                    <p>-</p>
                  )}
                </div>
              </div>
            </History>
          </ul>
        ))}
      </Content>
    </Container>
  );
};

export default Detail;
