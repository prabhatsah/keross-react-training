import Page from "./Page.jsx";
import ThemeContextProvider from "./ThemeContextProvider.jsx";
import "./Exercise26.css";

function Exercise26() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default Exercise26;
