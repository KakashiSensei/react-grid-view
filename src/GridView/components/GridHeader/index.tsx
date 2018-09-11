import * as React from "react";
import Consumer from "../../context/Consumer";
import "./style.css";

class GridHeader extends React.Component {

  public render() {
    return (
      <Consumer>
        {(value: any) => {
          return (
            <tbody>
              <tr>
                {value.column.map((headerData: any, key: number) => {
                  return (
                    <th className="gv-tr" key={key}>
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
