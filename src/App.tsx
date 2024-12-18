import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Hatdog", "Footlong", "Hambaga", "Furaisu", "Sanwichu"];
  return (
    <div>
      <ListGroup items={items} heading="Food" />
    </div>
  );
}

export default App;
