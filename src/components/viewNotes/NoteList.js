import React from "react";
import { ProductConsumer } from "../context";
import NotesCard from "./NotesCard";

class NoteList extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) =>
          value.notesData.map((item) => (
            <NotesCard key={item.id} value={item} />
          ))
        }
      </ProductConsumer>
    );
  }
}

export default NoteList;
