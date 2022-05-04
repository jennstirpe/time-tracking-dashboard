import { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import TimeData from './data.json';

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
  const [timeframe, setTimeframe] = useState("weekly");
  const [prevText, setPrevText] = useState("Last Week");

  useEffect(() => {
    if (timeframe === "daily") {
      setPrevText("Yesterday");
    } else if (timeframe === "weekly") {
      setPrevText("Last Week");
    } else if (timeframe === "monthly") {
      setPrevText("Last Month");
    }
  }, [timeframe]);

  

  function showDaily(e) {
    const weeklyBtn = e.target.nextElementSibling;
    const monthlyBtn = weeklyBtn.nextElementSibling;
    e.target.classList.add("active")
    weeklyBtn.classList.remove("active")
    monthlyBtn.classList.remove("active")

    setTimeframe("daily");
  }

  function showWeekly(e) {
    const dailyBtn = e.target.previousElementSibling;
    const monthlyBtn = e.target.nextElementSibling;
    e.target.classList.add("active")
    dailyBtn.classList.remove("active")
    monthlyBtn.classList.remove("active")

    setTimeframe("weekly");
  }

  function showMonthly(e) {
    const weeklyBtn = e.target.previousElementSibling;
    const dailyBtn = weeklyBtn.previousElementSibling;
    e.target.classList.add("active")
    dailyBtn.classList.remove("active")
    weeklyBtn.classList.remove("active")

    setTimeframe("monthly");
  }



  return (
    <ThemeProvider theme={theme} >
      <>
      <GlobalStyles />
        <StyledContainer>
          <User showDaily={showDaily} showWeekly={showWeekly} showMonthly={showMonthly} />
          <TimeCard id="work" time={TimeData[0]} timeframe={TimeData[0]["timeframes"][`${timeframe}`]} prevText={prevText} cardColor="hsl(15, 100%, 70%)" />
          <TimeCard id="play" time={TimeData[1]} timeframe={TimeData[1]["timeframes"][`${timeframe}`]} prevText={prevText} cardColor="hsl(195, 74%, 62%)" />
          <TimeCard id="study" time={TimeData[2]} timeframe={TimeData[2]["timeframes"][`${timeframe}`]} prevText={prevText} cardColor="hsl(348, 100%, 68%)" />
          <TimeCard id="exercise" time={TimeData[3]} timeframe={TimeData[3]["timeframes"][`${timeframe}`]} prevText={prevText} cardColor="hsl(145, 58%, 55%)" />
          <TimeCard id="social" time={TimeData[4]} timeframe={TimeData[4]["timeframes"][`${timeframe}`]} prevText={prevText} cardColor="hsl(264, 64%, 52%)" />
          <TimeCard id="self" time={TimeData[5]} timeframe={TimeData[5]["timeframes"][`${timeframe}`]} prevText={prevText} cardColor="hsl(43, 84%, 65%)" />
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
