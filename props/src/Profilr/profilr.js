export default function Profilr(props) {
    return (
      <div className="Appp">
        <h1>Apprends d’hier, vis pour aujourd’hui et espère pour demain </h1>
        <h2>beau sourire</h2>
        <img src={props.Belle} alt="img in src" />
        <p>Un sourire est un mot sans lettres</p>

        <button onClick={props.alert}>Happy</button>
      </div>
    );
  }
  
  Profilr.defaultProps = {
    Bio: "la vie est belle",
    age: "32"
  };
  