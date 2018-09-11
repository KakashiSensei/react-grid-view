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
                  const isSortable: boolean = headerData.isSortable || false;
                  return (
                    <th className={classMerged} key={key} onClick={isSortable ? this.toggleSort.bind(this, headerData, value) : this.voidFunction}>
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

  private voidFunction = () => {
    return;
  };

  private toggleSort = (headerData: any, value: any) => {
    const dataIndex:string = headerData.dataIndex;
    value.updateSort(dataIndex);
  };
}

export default GridHeader;
