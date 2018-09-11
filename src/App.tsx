import * as React from "react";
import { GridTable, GridHeader, GridRow } from "./GridView";
import "./App.css";

class App extends React.Component {
  private columns: any = [
    {
      dataIndex: "name",
      render: (text: any) => <a href="javascript:;">{text}</a>,
      title: "Name"
    },
    {
      dataIndex: "age",
      title: "Age"
    }
  ];

  private data: any = [
    {
      age: 32,
      name: "John Brown"
    },
    {
      age: 42,
      name: "Jim Green"
    }
  ];

  public render() {
    return (
      <GridTable className="customTable" column={this.columns} data={this.data}>
        <GridHeader className="customClass" />
        <GridRow className="customStyle" />
      </GridTable>
    );
  }
}

export default App;
