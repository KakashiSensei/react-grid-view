import * as React from "react";
import { GridTable, GridHeader, GridRow } from "./GridView";

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
      <GridTable column={this.columns} data={this.data}>
        <GridHeader />
        <GridRow />
      </GridTable>
    );
  }
}

export default App;
