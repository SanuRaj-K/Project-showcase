import {  Toaster } from "react-hot-toast";
import Cards from "./Components/Cards";

function App() {
  return (
    <div>
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Cards />
    </div>
  );
}

export default App;
