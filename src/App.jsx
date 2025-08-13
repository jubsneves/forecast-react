import "./App.css";
import SearchWeather from "./SearchWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="content">
      <main className="card-container">
        <SearchWeather />
      </main>
      <Footer />
    </div>
  );
}

export default App;
