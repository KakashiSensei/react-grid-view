import * as React from "react";
import GridHeader from "./elements/GridHeader";
import GridRow from "./elements/GridRow";
import GridTable from "./elements/GridTable";
import Provider from "./Context/Provider";

interface IColumn {
  title: string;
  render: JSX.Element;
}

interface IProps {
  column: [IColumn];
  dataInput: [any];
}

interface IState {
  data: any[];
  column: any[];
}

class GridView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: this.props.dataInput,
      column: this.props.column
    };
  }

  public render() {
    return (
      <Provider state={this.state}>
        <GridTable>
          <GridHeader/>
          <GridRow/>
        </GridTable>
      </Provider>
    );
  }
}

export default GridView;
