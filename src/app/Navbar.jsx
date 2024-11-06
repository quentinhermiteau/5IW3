import { themeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

function Link({ exercice }) {
  const { theme } = useContext(themeContext);
  console.log(theme);

  return (
    <li style={{ padding: "5px 0" }}>
      <a href={`/exercices/${exercice}`}>Exercice {exercice}</a>
    </li>
  );
}

export default function Navbar() {
  const themes = [
    {
      name: "Intro",
      exercices: [1, 2, 3],
    },
    {
      name: "handleEvent",
      exercices: [4],
    },
    {
      name: "useState",
      exercices: [5, 6, 7, 8],
    },
    {
      name: "useContext",
      exercices: [9, 10],
    },
    {
      name: "useReducer",
      exercices: [11, 12, 13],
    },
    {
      name: "Memoïsation",
      exercices: [14, 15],
    },
  ];

  const { theme, setTheme } = useContext(themeContext);

  return (
    <div id="navbar">
      <h1>Exercices</h1>
      <ul>
        {themes.map(({ name, exercices }) => (
          <div key={name}>
            <h2>{name}</h2>
            {exercices.map((exercice) => (
              <Link key={exercice} exercice={exercice} />
            ))}
          </div>
        ))}
      </ul>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme}
      </button>
    </div>
  );
}
