import * as React from "react";
import { GridTable, GridHeader, GridRow } from "./GridView";
import "./App.css";

class App extends React.Component {
  private columns: any = [
    {
      dataIndex: "id",
      title: "Id"
    },
    {
      dataIndex: "name",
      render: (text: any) => <a href="javascript:;">{text}</a>,
      title: "Name",
      isSortable: true
    },
    {
      dataIndex: "age",
      title: "Age",
      isSortable: true
    }
  ];

  private data: any = [
    {
      id: 1,
      age: 32,
      name: "John Brown"
    },
    {
      id: 2,
      age: 42,
      name: "Jim Green"
    },
    {
      id: 3,
      age: 16,
      name: "Brown Jim"
    },
    {
      id: 4,
      age: 54,
      name: "Carry Green"
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
