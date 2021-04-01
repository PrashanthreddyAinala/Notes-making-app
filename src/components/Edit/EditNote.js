import React from "react";
import { ProductConsumer } from "../context";

class EditNote extends React.Component {
  componentDidMount() {
    const { id, title, text } = this.props.data;
    this.setState({ id: id, title: title, text: text });
  }

  state = {
    id: "",
    title: "",
    text: ""
  };

  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <div className="container" id="edit">
            <div className="row">
              <div className="card col-10 mx-auto text-center">
                <div className="p-4">
                  <h5 className=" pb-3">Edit note</h5>
                  <input
                    //  value={title}
                    className="form-group mt-2 edit-input"
                    onChange={(e) => {
                      this.setState({ title: e.target.value });
                    }}
                    value={this.state.title}
                  />
                  <textarea
                    //  value={text}
                    className="form-group"
                    onChange={(e) => {
                      this.setState({ text: e.target.value });
                    }}
                    value={this.state.text}
                    rows="5"
                  />
                  <div>
                    <button
                      onClick={value.closeEdit}
                      className="btn btn-sm btn-outline-danger ml-3 mt-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => value.updateNote(this.state)}
                      className="btn btn-sm btn-outline-primary ml-3 mt-2"
                    >
                      Edit note
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default EditNote;
