import "./App.css";
import SearchWeather from "./SearchWeather";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="content">
      <main className="card-container">
        <SearchWeather city="Dublin" />
        <CurrentWeather city="Dublin" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
