import "./App.css";
import Header from "./components/header/header";
import CardsContainer from "./components/cards-container/cards-container";

// function getApi() {
//   fetch(" http://api.valantis.store:40000/", {
//     method: "POST",
//     headers: {
//       "X-Auth": "36c58664c6a85656502117384b351c40",
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify({
//       action: "get_ids",
//       params: { offset: 0, limit: 10 },
//     }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       getItems(data.result);
//       return data;
//     });
// }
// const api = getApi();
// function getItems(items) {
//   fetch(" http://api.valantis.store:40000/", {
//     method: "POST",
//     headers: {
//       "X-Auth": "36c58664c6a85656502117384b351c40",
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify({
//       action: "get_items",
//       params: { ids: items },
//     }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     });
// }

function App() {
  return (
    <div className="App">
      <Header />
      <CardsContainer />
    </div>
  );
}

export default App;
