import { useSelector } from "react-redux";

export default function TextList() {
  const texts = useSelector((state) => state.todos);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
