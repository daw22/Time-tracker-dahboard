import MenuCard from "./components/MenuCard"
import styled from "styled-components";
import {data} from "./data"
import ActivityCard from "./components/ActivityCard";
import { useState } from "react";

const Wrapper = styled.div`
    background: hsl(226, 43%, 10%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    margin: 2rem;
  `
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  max-width: 1300px;

  @media(min-width: 1200px){
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 0;
  row-gap: 1rem;
  flex-wrap: wrap;
  
   @media(min-width: 768px){
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
  }

  @media(min-width: 1200px){
    width: 66%;
    justify-content: space-around;
    margin-left: 1rem;
  }
`
const App = ()=> {
  const[ activeTimeframe, setActiveTimeframe ] = useState(0);
  return (
    <Wrapper>
    <Container>
      <MenuCard activeTimeframe= {activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
      <CardsContainer>
      { data.map(info => <ActivityCard data={info} timeframe={activeTimeframe} key={info.title}/>)}
      </CardsContainer>
    </Container>
    </Wrapper>
    );
}

export default App;