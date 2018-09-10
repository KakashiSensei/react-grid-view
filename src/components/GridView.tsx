import * as React from "react";
import GridHeader from "./elements/GridHeader";
import GridRow from "./elements/GridRow";
import GridTable from "./elements/GridTable";

interface IColumn {
  title: string;
  render: JSX.Element;
}

interface IProps {
  column: [IColumn];
  dataInput: [any];
}

interface IState {
  dataModified: [any];
}

class GridView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      dataModified: this.props.dataInput
    };
  }

  public render() {
    return (
      <GridTable>
        <GridHeader column={this.props.column} />
        <GridRow column={this.props.column} data={this.state.dataModified} />
      </GridTable>
    );
  }
}

export default GridView;
