import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: #181d1f;
  height: 8rem;

  a {
    text-decoration: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 4rem;
    margin-left: 2rem;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 7rem;
    margin: 2rem;
    font-size: 1.3rem;
  }
`
export const Logo = styled.a`
  color: #0776a1;
  font-size: 2rem;
`

export const Title = styled.a`
  color: white;

  &:hover {
    color: #0776a1;
  }
`
