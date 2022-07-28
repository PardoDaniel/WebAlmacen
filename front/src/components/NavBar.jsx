import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: black;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HomePage = styled.span`
    font-size: 20px;
    cursor: pointer;
    color: white;
`
const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  color: white;
`;
const Input = styled.input`
  border: none;
`;
const CenterItem = styled.div`
    cursor: pointer;
    color: white;
`
function NavBar() {
  return (
    <div>  
        <Container>
            <Wrapper>
                <Left>
                    <HomePage>
                       <Link to='/' color='white'> <b>HOME</b></Link>
                    </HomePage>
                </Left>
                <Center>
                    <CenterItem><Link to='/login' color='white'>INICIAR SESION</Link></CenterItem>
                    <CenterItem><Link to='/register' color='white'>REGISTRARSE</Link></CenterItem>
                    <CenterItem><Link to='/materiales' color='white'>MATERIALES</Link></CenterItem>
                </Center>
                <Right>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon />
                    </SearchContainer>
                </Right>
            </Wrapper>
        </Container> 
    </div>
  )
}

export default NavBar