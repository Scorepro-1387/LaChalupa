import './page.css';
import Homepage from '../Components/Homepage/Homepage';
import Navbar from '../Components/NavBar/Navbar';

export default function Home() {
  const Phonenumber = "+1(419)726-0700";
  
  return (
    <div className='main-div' style={{}}>
      <div className='elements-div'>
        <div style={{position:"relative"}} className='welcomes'>
          <div style={{marginTop: "-550px",zIndex: "10",position: "fixed"}}>
            <Navbar/>
          </div>
          <div style={{zIndex: "-10",position: "absolute"}}>
            <Homepage/>
          </div>
        </div>
        <div className='filler'>
          <div className='hoursdiv'>
            <h1 style={{fontSize: "50px"}}>Hours:</h1>
            <h4 className='hourstext'>Monday: 11AM-9:30PM</h4>
            <h4 className='hourstext'>Tuesday: 11AM-9:30PM</h4>
            <h4 className='hourstext'>Aednesday: 11AM-9:30PM</h4>
            <h4 className='hourstext'>Thursday: 11AM-9:30PM</h4>
            <h4 className='hourstext'>Friday: 11AM-10:00PM</h4>
            <h4 className='hourstext'>Saturday: 11AM-10:00PM</h4>
            <h4 className='hourstext'>Sunday: 11AM-9:30PM</h4>
          </div>
          <div className='breakingpoint1'></div>
          <div className='Location' style={{backgroundColor: "#141549", width: "100vw",height: "450px",marginTop: "-20px"}}>
            <div>
              <div>
                <h1 style={{
                  margin: "10px",
                  fontSize: "40px"
                }}>Location</h1>
                <h4 className="adress" style={{
                  margin: "10px"
                }}>6186 N Summit St, Toledo, OH 43611</h4>
                <a className="adress" style={{
                  margin: "20px",
                  color: "#E24C00"
                }} target="_blank" rel="noopener noreferrer"
                href="https://www.google.com/maps/place/La+Chalupa/@41.7307777,-83.4785614,17z/data=!3m1!4b1!4m6!3m5!1s0x883b8276c4801f03:0xb44e4a49e7db8d62!8m2!3d41.7307777!4d-83.4785614!16s%2Fg%2F11btrrqsvc?hl=en-US"
                >Open in Google Maps</a>
                <br/>
                <p style={{color: "#222"}}>-</p>

                <a className="adress" style={{
                  margin: "20px",
                  color: "#E24C00"
                }}
                href="https://maps.apple.com/?address=6186%20N%20Summit%20St,%20Toledo,%200H%20%2043611,%20United%20States&auid=8871260466668453794&||=41.730621.-83.478645&|sp=9902&q=La%20Chalupa%20Mexican%20Restaurant&t=m"
                >Open in Apple Maps</a>
              </div>
              <div style={{marginTop: "40px"}}>
                <h1 style={{
                  margin: "10px"
                }}>Contact</h1>
                <h1>Phone Number:</h1>
                <h1 style={{
                  margin: "10px"
                }}>{Phonenumber}</h1>
                <h1 style={{marginTop: "100px"}}>Made by Salar Hashemian</h1>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};
