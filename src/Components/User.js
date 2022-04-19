import { StyledUser } from "./styled/User.styled"
import userImg from "../images/image-jeremy.png"

const User = () => {
  return (
    <StyledUser>
        <header>
            <img id="user-img" src={userImg} alt="Jeremy Robson" />
            <h1 id="user-name"><span>Report for</span> Jeremy Robson</h1>
        </header>
        <nav>
            <button id="daily" class="view">Daily</button>
            <button id="weekly" class="view active">Weekly</button>
            <button id="monthly" class="view">Monthly</button>
        </nav>
    </StyledUser>
  )
}

export default User