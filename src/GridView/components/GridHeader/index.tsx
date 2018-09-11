import * as React from "react";
import Consumer from "../../context/Consumer";
import "./style.css";

interface IProps {
  className?: string;
}
class GridHeader extends React.Component<IProps> {
  public render() {
    const classMerged = `gv-tr ${this.props.className}`;
    return (
      <Consumer>
        {(value: any) => {
          return (
            <tbody>
              <tr>
                {value.column.map((headerData: any, key: number) => {
                  return (
                    <th className={classMerged} key={key}>
                      {headerData.title}
                    </th>
                  );
                })}
              </tr>
            </tbody>
          );
        }}
      </Consumer>
    );
  }
}

export default GridHeader;
