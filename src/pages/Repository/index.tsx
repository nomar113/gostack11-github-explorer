import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/34141267?s=460&u=3d13ddaaf7d1aff4711edde9c860a80fc67c284f&v=4"
            alt=""
          />
          <div>
            <strong>full_name</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>333</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>4999</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>999</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to={`repositories`}>
          <div>
            <strong>epository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
