import * as React from "react";
import "./style.css";

class GridTable extends React.Component {
  public render() {
    return (
      <table className="gv-table">
        {this.props.children}
      </table>
    );
  }
}

export default GridTable;
