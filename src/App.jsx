import "./App.css";
import Navigation from "@layouts/Navigation";
import View from "@layouts/View";

function App() {
  return (
    <div className="flex">
      <div className="">
        <Navigation />
      </div>
      <div className=" grow bg-[#FAFAFA]">
        <View />
      </div>
    </div>
  );
}

export default App;
