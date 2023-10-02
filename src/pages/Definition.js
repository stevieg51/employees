import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Definition(props) {
  const [word, setWord] = useState();

  const navigate = useNavigate();

  // grabs the param from the url and assigns it to serach, so /paint would aissign th evalue paint to the search var
  let { search } = useParams();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search).then(
      (response) => {
        if (response.status === 404) {
          navigate("/404");
        } else {
          return response.json().then((data) => {
            setWord(data[0].meanings);
          });
        }
      }
    );
  }, []);

  return (
    <>
      {/* Make sure to use the ternary incase the call to the api is taking longer than needed, other map will not work */}
      {word
        ?
        <>
        <h1>Here is a definition </h1>
        {word.map((m) => {
            return (
              <p key={uuidv4()}>
                {" "}
                {m.partOfSpeech + ": " + m.definitions[0].definition}{" "}
              </p>
            );
            
          })
          } 
          <button
        onClick={() => {
          navigate("/dictionary");
        }}
      >
        Go Back
      </button> </>
        : null}
    </>
  );
}
