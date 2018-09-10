import * as React from "react";
import "./style.css";

interface IProps {
  column: any[];
  data: any[];
}

class GridRow extends React.Component<IProps> {
  public render() {
    const mergedData: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.props.data.length; i++) {
      mergedData.push({
        column: this.props.column,
        data: this.props.data[i]
      });
    }
    // tslint:disable-next-line:no-console
    console.log("mergedData", mergedData);
    return (
      <tbody>
        {mergedData.map((child: any, key: number) => {
          return this.rowElement(child, key);
        })}
      </tbody>
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
      return (
        <td className="gv-td" key={key}>
          {child.column.render ? child.column.render(child.data) : child.data}
        </td>
      );
    });

    return <tr key={key}>{tdArray}</tr>;
  };
}

export default GridRow;
