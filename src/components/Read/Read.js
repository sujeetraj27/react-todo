import React from "react";
import "./Read.css";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Read = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>Title: {user[0].title}</h1>
      <h1>Description: {user[0].desc}</h1>
      <h1>create By: {user[0].creatOn} /= </h1>
      <Link to="/">
        <Button variant="info">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Read;
