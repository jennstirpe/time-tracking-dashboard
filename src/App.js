
// import { buildQueries } from "@testing-library/dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./Components/styled/Global";
import { StyledContainer } from "./Components/styled/Container.styled";
import User from "./Components/User";
import TimeCard from "./Components/TimeCard";


const theme = {
  colors: {
    mainBg: "hsl(226, 43%, 10%)",
    cardBg: "hsl(235, 46%, 20%)",
    userBg: "hsl(246, 80%, 60%)",
    workBg: "hsl(15, 100%, 70%)",
    playBg: "hsl(195, 74%, 62%)",
    studyBg: "hsl(348, 100%, 68%)",
    exerciseBg: "hsl(145, 58%, 55%)",
    socialBg: "hsl(264, 64%, 52%)",
    selfBg: "hsl(43, 84%, 65%)",

    hoverBg: "hsl(235, 45%, 30%)",
    
    links: "hsl(235, 45%, 61%)",
    text: "hsl(236, 100%, 87%)"
  }
}


function App() {


  return (
    <ThemeProvider theme={theme} >
      <>
      <GlobalStyles />
        <StyledContainer>
          <User />
          <TimeCard cardName="work" current="32" previous="36" color="hsl(15, 100%, 70%)" />
          <TimeCard cardName="play" current="10" previous="8" color="hsl(195, 74%, 62%)" />
          <TimeCard cardName="study" current="4" previous="7" color="hsl(348, 100%, 68%)" />
          <TimeCard cardName="exercise" current="4" previous="5" color="hsl(145, 58%, 55%)" />
          <TimeCard cardName="social" current="5" previous="10" color="hsl(264, 64%, 52%)" />
          <TimeCard cardName="self care" current="2" previous="2" color="hsl(43, 84%, 65%)" />
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
