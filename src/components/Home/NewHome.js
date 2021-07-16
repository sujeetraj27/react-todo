import React,{useState} from 'react';
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewHome = ({user}) => {

    const [line, setLine] = useState(false)

    const cutIline = () =>{
      setLine(true)
    }
    return (
        <div>
            <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created By</th>
            <th>Action</th>
          </tr>
        </thead>

             <tr style={{textDecoration:  line ? "line-through" : "none"}}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.desc}</td>
              <td>{user.creatOn}</td>
              <td>
                
                  <Button className="action__btn" variant="success" onClick={cutIline}>
                    Done
                  </Button>
                
                <Link to={"/edit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>
                <Link to={"/delete/"+user.id}>
                <Button className="action__btn" variant="danger">
                  Delete
                </Button>
                </Link>
              </td>
            </tr>
        </div>
    );
}

export default NewHome;
