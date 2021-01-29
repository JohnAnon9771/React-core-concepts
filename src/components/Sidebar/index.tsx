import { ReactNode } from 'react';

import logo from 'assets/logo.png';

import * as S from './styles';

interface Props {
  children?: ReactNode;
}

export default function Sidebar({ children }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="" />
        <h2>React Core Concepts</h2>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
