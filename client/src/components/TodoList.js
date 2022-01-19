import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";

import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";

import PropTypes from "prop-types";

class TodoList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Name:");
            this.setState((state) => ({
              items: [...state.items, { id: uuid(), name }],
            }));
          }}
        >
          Add New Item
        </Button>

        <ListGroup>
          <TransitionGroup className="todoList">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

TodoList.propTypes = {
  item: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(TodoList);
