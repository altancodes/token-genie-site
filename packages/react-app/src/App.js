import { Container, Header} from "./components";
import TKAppBar from "./components/appbar";
import { useEffect, useState } from "react";
import { Challenges } from "./components/Challenges";
import { Prizes } from "./components/Prizes";


function App() {
  const [challenges, setChallenges] = useState(false);
  const [prizes, setPrizes] = useState(false);

  useEffect( () => {
    // Check that toggling works 
    // TODO: There must be tests instead
    console.log("challenges: ", challenges);
    console.log("prizes: ", prizes);
  })
  

  // Pick depending on the show
  // Should pass the relevant details to render an item
  let show;
  if (challenges == true && prizes == false) {
    show = <Challenges/>;
    console.log(show);
  } else if (prizes == true && challenges == false) {
    show = <Prizes/>;
    console.log(show);
  }
  return (
    <Container>
      <Header>
        <TKAppBar challenges={challenges} setChallenges={setChallenges} prizes={prizes} setPrizes={setPrizes}/>
      </Header>
      {show}
    </Container>
  );
}

export default App;
