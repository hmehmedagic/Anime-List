import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <div className="title">Anime Character Finder</div>
      <div className="links">
      <Link to="/">
        <div>Homepage</div>
      </Link>
      <Link to="/characters">
        <div>Characters</div>
      </Link>
      </div>
    </div>
  );
}