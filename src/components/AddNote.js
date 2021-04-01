import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./context";

class AddNote extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <div className="container">
            <form className="mt-5" onSubmit={value.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={value.title}
                  className="form-control"
                  placeholder="Enter note title..."
                  onChange={value.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control py-3"
                  value={value.text}
                  rows="6"
                  placeholder="Enter notes..."
                  onChange={value.handleText}
                  required
                />
              </div>
              <div>
                <button
                  className="btn btn-block btn-outline-primary mb-3"
                  type="submit"
                >
                  Add Note
                </button>
              </div>
            </form>
            <Link to="./viewnote">
              <button className="btn btn-block">viewNotes</button>
            </Link>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default AddNote;
