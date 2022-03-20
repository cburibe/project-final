import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Hotels = (props) => {
  const { actions } = useContext(Context);
  return (
    <div className="col">
      <Card style={{ width: "17rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2017/11/09/22/21/road-2934838_1280.jpg"
        />
        <Card.Body>
          <Card.Title>{props.anfitrion}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
