import React from "react";
import { ProductConsumer } from "../context";

class NotesCard extends React.Component {
  render() {
    const { id, title, text } = this.props.value;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="container">
            <div className="card mt-5">
              <div className="card-header">
                <h5>{title}</h5>
              </div>
              <div className="card-body">{text}</div>
              <div className="card-footer">
                <button
                  onClick={() => value.handleEdit(id)}
                  className="btn btn-md btn-outline-primary mx-3"
                >
                  <i className="fa fa-edit" />
                </button>
                <button
                  className="btn btn-md btn-outline-danger"
                  onClick={() => value.handleDelete(id)}
                >
                  <i className="fa fa-trash" />
                </button>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default NotesCard;
