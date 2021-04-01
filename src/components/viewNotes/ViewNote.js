import React from "react";
import { Link } from "react-router-dom";

import NotesList from "./NoteList";
import { ProductConsumer } from "../context";

class ViewNote extends React.Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { notesData } = value;
            if (notesData.length > 0) {
              return (
                <div className="container">
                  <div>
                    <NotesList />
                  </div>
                  <div className="mt-5 text-right mr-4">
                    <Link
                      to="/addnote"
                      className="btn btn-lg btn-outline-primary add"
                    >
                      <i className="fa fa-plus fa-lg" />
                    </Link>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="container">
                  <div className="mt-5">
                    <h1>There are no notes added!!</h1>
                  </div>
                  <div className="mt-5 text-right mr-4">
                    <Link
                      to="/addnote"
                      className="btn btn-lg btn-outline-primary add"
                    >
                      <i className="fa fa-plus fa-lg" />
                    </Link>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default ViewNote;
