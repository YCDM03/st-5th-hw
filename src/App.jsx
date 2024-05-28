import { useEffect, useContext } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { TextContext } from "./context/TextContext";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  const { texts, setTexts } = useContext(TextContext);

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <TextList />
    </div>
  );
}

export default App;
