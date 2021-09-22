import React from 'react'
import { Container, Logo, Menu, Nav, Title } from './style'

const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo href="/">&lt;FRONT&frasl;&gt;</Logo>
        <Menu>
          <li>
            <Title href="/">Artigos</Title>
          </li>
          <li>
            <Title href="/" className="title">
              Início
            </Title>
          </li>
          <li>
            <Title>Sobre Mim</Title>
          </li>
        </Menu>
      </Nav>
    </Container>
  )
}

export default Header
