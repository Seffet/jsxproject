import logo from './logo.svg';
import './App.css';
import image from'public\imageinpublic.jpg';
function App() {
  return (
    <div className="App">
     <div>
  <div style={{"border":"solid 1px black","max-width":"100vw"}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src="/imageInSrc.jpg" />
    <br />
    
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
    </div>
  );
}

export default App;
