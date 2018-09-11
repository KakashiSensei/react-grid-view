import * as React from "react";
import { GridTable, GridHeader, GridRow } from "./GridView";
import { keys } from "lodash";
import "./App.css";
import SampleData from "./data.csv";

interface IState {
  column: any[];
  data: any[];
}
class App extends React.Component<any, IState> {
  // private columFns: any = [
  //   {
  //     dataIndex: "id",
  //     title: "Id"
  //   },
  //   {
  //     dataIndex: "name",
  //     render: (text: any) => <a href="javascript:;">{text}</a>,
  //     title: "Name",
  //     isSortable: true
  //   },
  //   {
  //     dataIndex: "age",
  //     title: "Age",
  //     isSortable: true
  //   }
  // ];

  // private data: any = [
  //   {
  //     id: 1,
  //     age: 32,
  //     name: "John Brown"
  //   },
  //   {
  //     id: 2,
  //     age: 42,
  //     name: "Jim Green"
  //   },
  //   {
  //     id: 3,
  //     age: 16,
  //     name: "Brown Jim"
  //   },
  //   {
  //     id: 4,
  //     age: 54,
  //     name: "Carry Green"
  //   },
  //   {
  //     id: 5,
  //     age: 24,
  //     name: "Carry Green"
  //   }
  // ];

  constructor(props: any) {
    super(props);
    const jsonData = SampleData;

    const columnKeys = keys(jsonData[0]);
    const column = columnKeys.map(col => {
      return {
        dataIndex: col,
        title: col,
        isSortable: true
      };
    });
    const data = jsonData;

    this.state = {
      column,
      data
    };
  }

  public render() {
    console.log("this.state", this.state);
    return (
      <GridTable
        className="customTable"
        column={this.state.column}
        data={this.state.data}
      >
        <GridHeader className="customClass" />
        <GridRow className="customStyle" />
      </GridTable>
    );
  }
}

export default App;
