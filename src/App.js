import logo from './logo.svg';
import './App.css';
import Header from './components/head.js'
import Troll from './components/Troll';
import troll from './img/Troll.jpg'
import Body from './components/body.js'
import Footer from './components/footer.js'


const tovars =['OnePlus 11','OnePlus 11R', 'Airpods','Samsung Ace 2', 'iPhone 11']

function App() {
 
  return (
    <div className ="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <Body  tovar={tovars}/>
      <Troll image={troll} />
      <img src={troll} />
      <Footer />
    </div>
  )
}

export default App;