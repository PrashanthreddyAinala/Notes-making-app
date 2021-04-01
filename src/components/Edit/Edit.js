import React from "react";
import { ProductConsumer } from "../context";
import EditNote from "./EditNote";

class Edit extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { openEdit } = value;
          const data = value.tempItem;
          // console.log(data);
          if (!openEdit) {
            return null;
          } else {
            return <EditNote data={data} />;
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Edit;
