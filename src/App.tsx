import * as React from "react";
import GridView from "./components/GridView";

class App extends React.Component {
  private columns: any = [
    {
      dataIndex: "name",
      render: (text: any) => <a href="javascript:;">{text}</a>,
      title: "Name",
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
      <div>
        <GridView column={this.columns} dataInput={this.data} />
      </div>
    );
  }
}

export default App;
