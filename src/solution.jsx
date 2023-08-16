import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <main>
      <div>
        <img
          src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
          alt="Logo"
        />
      </div>
      {/* pour parcourir les elements du tableau */}
      {data.map((elem, index) => {
        // console.log(elem.images);
        return (
          <div key={index}>
            <p>{elem.category}</p>
            {elem.images.map((url, index) => {
              // console.log(url);
              return <img key={index} src={url} alt="" />;
            })}
            {/* {data.map((elem, index) => {
              console.log(elem.images);
              return <p key={index}> {elem.category.images}</p>;
            })} */}
          </div>
        );
      })}
    </main>
  );
}

export default App;
