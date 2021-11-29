
import Profilr from "./Profilr/profilr";
import Belle from "./Belle.jpg";
import "./App.css";
     
export default function App() {
  var x = "être spécial";
  const funprop = () => {
    return alert("this my alert");
  };
  return (
    <div className="App">
      <Profilr siham="être spécial" Belle={Belle} alert={funprop} />
    </div>
  );
}


