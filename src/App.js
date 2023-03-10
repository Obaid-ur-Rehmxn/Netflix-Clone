import "./App.css";
import Row from "./components/Row/Row";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title={"Series"} fetchUrl={requests.fetchSeries} isLargeRow />
      <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} isLargeRow />
      <Row title={"Animation Movies"} fetchUrl={requests.fetchAnimationMovies} isLargeRow />
      <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} isLargeRow />
    </div>
  );
}

export default App;
