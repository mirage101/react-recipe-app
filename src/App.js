import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}> Delicious Cuisine</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
  padding: 0 0.5rem;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
