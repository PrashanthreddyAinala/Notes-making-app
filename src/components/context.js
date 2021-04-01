import React from "react";
import Data from "../NotesData";
import { temp } from "../NotesData";

const contextProduct = React.createContext();

class ProductProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      notesData: [],
      title: "",
      text: "",
      openEdit: false,
      tempItem: temp
    };
  }

  // initializing the data
  componentDidMount() {
    this.setData();
  }

  setData = () => {
    let tempData = [];
    Data.forEach((item) => {
      const singleItem = { ...item };
      tempData = [...tempData, singleItem];
    });
    this.setState(() => {
      return { notesData: tempData };
    });
  };

  // getting values from form
  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleText = (eve) => {
    this.setState({ text: eve.target.value });
  };

  // add note on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: Math.random().toString(),
      title: this.state.title,
      text: this.state.text
    };
    this.setState(() => {
      return {
        notesData: [...this.state.notesData, newNote]
      };
    });
    this.setState({ title: "", text: "" });
  };

  // deleting the note
  handleDelete = (id) => {
    const tempData = [...this.state.notesData];
    const newData = tempData.filter((item) => item.id !== id);
    this.setState(() => {
      return {
        notesData: [...newData]
      };
    });
  };

  // get Item
  getItem = (id) => {
    const product = this.state.notesData.find((item) => item.id === id);
    return product;
  };

  // Item edit
  handleEdit = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { tempItem: product, openEdit: true };
    });
  };

  closeEdit = () => {
    this.setState(() => {
      return { openEdit: false };
    });
  };

  // updating new note
  updateNote = (value) => {
    const updatedNote = value;
    const tempNote = this.getItem(value.id);
    tempNote.title = updatedNote.title;
    tempNote.text = updatedNote.text;
    this.closeEdit();
  };

  render() {
    return (
      <contextProduct.Provider
        value={{
          ...this.state,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          handleText: this.handleText,
          handleDelete: this.handleDelete,
          handleEdit: this.handleEdit,
          closeEdit: this.closeEdit,
          updateNote: this.updateNote
        }}
      >
        {this.props.children}
      </contextProduct.Provider>
    );
  }
}

const ProductConsumer = contextProduct.Consumer;

export { ProductProvider, ProductConsumer };
