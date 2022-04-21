import { StyledUser } from "./styled/User.styled"
import userImg from "../images/image-jeremy.png"

const User = ({ showDaily, showWeekly, showMonthly }) => {
  return (
    <StyledUser>
        <header>
            <img id="user-img" src={userImg} alt="Jeremy Robson" />
            <h1 id="user-name"><span>Report for</span> Jeremy Robson</h1>
        </header>
        <nav>
            <button onClick={showDaily} id="daily" className="view">Daily</button>
            <button onClick={showWeekly} id="weekly" className="view active">Weekly</button>
            <button onClick={showMonthly} id="monthly" className="view">Monthly</button>
        </nav>
    </StyledUser>
    
  )
}

export default User