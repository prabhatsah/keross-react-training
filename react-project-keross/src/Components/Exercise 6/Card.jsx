import { Children } from "react";
import "./Exercise6.css";

function Card({ name, children }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{children}</p>
    </div>
  );
}

export default Card;
