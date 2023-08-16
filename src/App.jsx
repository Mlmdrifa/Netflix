import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <main>
      <img
        src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
        alt="Logo"
      />

      {data.map((elem, index) => {
        console.log(elem);
        return (
          <div key={index}>
            <p>{elem.category}</p>
            <div className="caroussel">
              {elem.images.map((url, index) => {
                console.log(url);
                return <img key={index} src={url} alt="" />;
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default App;
