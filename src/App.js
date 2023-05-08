import { Header } from "./stories/Header";
import { Button } from "./stories/Button";
import {FaChartLine, FaHorseHead, FaUserFriends} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header logo={process.env.PUBLIC_URL + '/ADTRAN_Logo_Final_White.svg'} />
      <div style={{position: 'fixed', top: '70px', left: '10%', width: '80%', height: '1000px'}}>
        <img style={{width: '100%'}} src={process.env.PUBLIC_URL + '/PageTop.jpg'} alt="page top to be designed"/>
        <div style={{width: '24%', float: 'left'}}>
          <Button primary={false} width='100%' icon={<FaHorseHead/>} label='Device Manager' />
          <Button primary={false} width='100%' icon={<FaChartLine/>} label='Home Analytics' />
          <Button primary={false} width='100%' icon={<FaUserFriends/>} label='Subscriber Insight' />
        </div>
        <div style={{ width: '74%', float:"right"}}>
          <img style={{width: '100%', height: '320px'}} src={process.env.PUBLIC_URL + '/PageRight.jpg'} alt="page right to be designed"/>
        </div>
      </div>
    </div>
  );
}

export default App;
