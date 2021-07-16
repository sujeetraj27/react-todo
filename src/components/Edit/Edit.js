import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id === id);

  const [title, setTitle] = useState(user[0].title);
  const [desc, setDesc] = useState(user[0].desc);
  const [creatOn, setCreatOn] = useState(user[0].creatOn);
  

  const editName = (e) => {
    setTitle(e.target.value);
    const edited_title = title;
    user[0].title = edited_title;
  };

  const editPosition = (e) => {
    setDesc(e.target.value);
    const edited_desc = desc;
    user[0].desc = edited_desc;
  };

  const editSalary = (e) => {
    setCreatOn(e.target.value);
    const edited_creatOn = creatOn;
    user[0].cratrOn = edited_creatOn;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={title}
            onChange={editName}
            placeholder={user[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="position"
            // value={position}
            onChange={editPosition}
            placeholder={user[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Created By</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            // value={salary}
            onChange={editSalary}
            placeholder={user[0].salary}
          />
        </Form.Group>
        <Link to="/">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit Todo
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
