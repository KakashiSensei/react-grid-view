import Provider from "../../context/Provider";
import * as React from "react";
import "./style.css";

interface IProps {
  column: any[];
  data: any[];
  className?: string;
}

interface IState {
  column: any[];
  data: any[];
}

class GridTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { className, ...otherProps } = props;
    this.state = {
      ...otherProps
    };
  }
  public render() {
    const className = `gv-table ${this.props.className}`;
    return (
      <Provider state={this.state}>
        <table className={className}>{this.props.children}</table>
      </Provider>
    );
  }
}

export default GridTable;
