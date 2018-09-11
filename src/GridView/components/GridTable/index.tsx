import Provider from "../../context/Provider";
import * as React from "react";
import "./style.css";

interface IProps {
  column: any[];
  data: any[];
}

interface IState { 
  column: any[];
  data: any[];
}

class GridTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ...props
    }
  }
  public render() {
    return (
      <Provider state={this.state}>
        <table className="gv-table">{this.props.children}</table>
      </Provider>
    );
  }
}

export default GridTable;
