import { Header } from "./stories/Header";
import { Button } from "./stories/Button";
import './page.css';
import {FaChartLine, FaHorseHead, FaUserFriends} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header logo={process.env.PUBLIC_URL + '/ADTRAN_Logo_Final_White.svg'} />
      
      <div style={{position: 'fixed', padding: '15px', left: '10%', width: '80%'}}>
        <div className='header'>Dashboard</div>
        <div className="subheading">Care</div>
        <div className="link-item">
      <h4>Parker McGregor</h4>
      <p>
      Brainerd, MN 56401<br/>
      218 555 4150<br/>
      ID: 1750<br/>
      </p>
      <br/><br/>
      <h4>Account Number</h4>
      <p>8014</p>
      <br/><br/>
      <h4>Service Type</h4>
      <p>Fibre</p>
    </div>
  
    <div className="link-item1">
    <h3 style={{margin: 0}}>Details</h3>
    <table align="center">
      <tr>
        <td className="rowHead">Site</td>
        <td>--</td>
      </tr>
      <tr>
        <td className="rowHead">Port</td>
        <td>2</td>
      </tr>
      <tr>
        <td className="rowHead">Speed Profile</td>
        <td >Upstream 998000</td>
      </tr>
      <tr>
        <td></td>
        <td>Downstream 6198000</td>
      </tr>
      <tr>
        <td className="rowHead">Current Speed</td>
        <td> Upstream</td>
      </tr>
      <tr>
        <td></td>
        <td>Downstream</td>
      </tr>
      <tr>
        <td className="rowHead">Attainable Speed</td>
        <td>Upstream</td>
      </tr>
      <tr>
        <td></td>
        <td>Downstream</td>
      </tr>
    </table>
    </div>
    
    <div className="link-item2">
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <h4>Top Insights</h4>
        <Button primary={true} size='small' label='Export' />
      </div>
      <div className="checkBoxContent">
        Display Node
        <input type="checkbox" id="CHK" name="CHK" value="TID"/>
        TID
        <input type="checkbox" id="CHK" name="CHK" value="IP"/>
        IP
      </div>
    </div>
      </div>
      <div style={{position: 'fixed', top: '400px', padding: '15px', left: '10%', width: '80%'}}>
        <div style={{width: '20.5%', float: 'left'}}>
          <Button primary={false} size='large' icon={<FaHorseHead/>} label='Device Manager' />
          <Button primary={false} size='large' icon={<FaChartLine/>} label='Home Analytics' />
          <Button primary={false} size='large' icon={<FaUserFriends/>} label='Subscriber Insight' />
        </div>
        <div style={{ width: '75.8%', float:"left", marginLeft: '20px'}}>
          <img style={{width: '100%', height: '320px'}} src={process.env.PUBLIC_URL + '/Chart.png'} alt="page right to be designed"/>
        </div>
      </div>      
    </div>
  );
}

export default App;
