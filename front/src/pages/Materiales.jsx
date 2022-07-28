import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styled from "styled-components";
import {materialesLista} from "../data";
import Material from "./Material";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Materiales() {
  return (
    <div>
        <NavBar/>
        <Container>
            {materialesLista.map((item) => (
                <Material item={item} key={item.id}/>
            ))}
        </Container>

        <Footer/>
    </div>
  )
}

export default Materiales