import React, { useContext } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import NewHome from './NewHome'

const Home = () => {
  const [users] = useContext(UserContext);

  return (
    <div>
      <Link to="/create">
        <Button className="create__btn" variant="primary">
          Create Todo
        </Button>
      </Link>

      <Table striped bordered>
        
        <tbody>
          {users.map((user) => (
            <NewHome user={user}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
