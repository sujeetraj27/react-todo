import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Create = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [create, setCreate] = useState("");

  const [users, setUser] = useContext(UserContext);
  const history = useHistory()

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDesc = (e) => {
    setDesc(e.target.value);
  };

  const updateCreate = (e) => {
    setCreate(e.target.value);
  };

  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {id:id, title:title, desc:desc, creatOn:create}])
      history.push('/')
  }

  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={title}
            onChange={updateTitle}
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={desc}
            onChange={updateDesc}
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Created By</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={create}
            onChange={updateCreate}
            placeholder="Crteated by"
          />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">
          Create Todo
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
