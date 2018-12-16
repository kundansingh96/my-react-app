import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'

const Header = styled.div`
  font-size: 20px;
  color: red;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width: 200px;
  margin: auto;
`
class App extends Component {
  render() {
    return (
      <Wrapper>
      <Logo src={logo}/>
      <Header>df</Header>
      <div>dufgy</div>
      </Wrapper>
    );
  }
}

export default App;
