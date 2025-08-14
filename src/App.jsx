import "./App.css";
import SearchWeather from "./SearchWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <div className="App__content">
      <main className="App__card">
        <SearchWeather />
      </main>
    </div>
      <Footer />
    </div>
  );
}

export default App;
