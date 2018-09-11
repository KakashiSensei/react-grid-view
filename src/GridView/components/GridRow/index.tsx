import * as React from "react";
import Consumer from "../../context/Consumer";
import "./style.css";

interface IProps {
  className?: string;
}

class GridRow extends React.Component<IProps> {
  public render() {
    // const mergedData: any[] = [];
    return (
      <Consumer>
        {(value: any) => {
          const mergedData: any[] = [];
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < value.data.length; i++) {
            mergedData.push({
              column: value.column,
              data: value.data[i]
            });
          }
          return (
            <tbody>
              {mergedData.map((child: any, key: number) => {
                return this.rowElement(child, key);
              })}
            </tbody>
          );
        }}
      </Consumer>
    );
  }

  private rowElement = (child: any, key: number) => {
    const mergedData: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < child.column.length; i++) {
      const dataIndex = child.column[i].dataIndex;
      mergedData.push({
        column: child.column[i],
        data: child.data[dataIndex]
      });
    }

    const tdArray = mergedData.map((child, key) => {
      const className = `gv-td ${this.props.className}`;
      console.log("Adding table row");
      return (
        <td className={className} key={key}>
          {child.column.render ? child.column.render(child.data) : child.data}
        </td>
      );
    });
    return <tr key={key}>{tdArray}</tr>;
  };
}

export default GridRow;
