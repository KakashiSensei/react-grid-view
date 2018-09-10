import * as React from "react";
import "./style.css";

interface IProps {
  column: any;
}

class GridHeader extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <tbody>
        <tr>
          {this.props.column.map((headerData: any, key: number) => {
            return <th className="gv-tr" key={key}>{headerData.title}</th>;
          })}
        </tr>
      </tbody>
    );
  }
}

export default GridHeader;
