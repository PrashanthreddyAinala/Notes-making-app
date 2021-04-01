import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div>
          <Link to="/addnote">
            <button className="btn btn-block btn-lg mb-3">Add Note</button>
          </Link>
        </div>
        <div>
          <Link to="/viewnote">
            <button className="btn btn-block btn-lg">View Notes</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default MainPage;
