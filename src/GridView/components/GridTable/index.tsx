import Provider from "../../context/Provider";
import { orderBy, keys, values, pickBy } from "lodash";
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
  sortBy: any;
}

enum SORT {
  NO_SORT = "noSort",
  ASCENDING = "asc",
  DESCENDING = "desc"
}

class GridTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { className, ...otherProps } = props;
    const sortIndexArray = {};
    this.props.column.map(col => {
      sortIndexArray[col.dataIndex] = SORT.NO_SORT;
    });
    this.state = {
      ...otherProps,
      sortBy: { ...sortIndexArray }
    };
  }
  public render() {
    const className = `gv-table ${this.props.className}`;
    // const children = React.Children.forEach(this.props.children, (child, key) => {
    //   return child
    // })
    const val = {
      ...this.state,
      updateSort: this.updateBySortingValue
    };

    return (
      <Provider value={val}>
        <table className={className}>{this.props.children}</table>
      </Provider>
    );
  }

  private updateBySortingValue = (dataIndex: string) => {
    const updatedSortBy = { ...this.state.sortBy };
    switch (updatedSortBy[dataIndex]) {
      case SORT.NO_SORT:
        updatedSortBy[dataIndex] = SORT.ASCENDING;
        break;
      case SORT.ASCENDING:
        updatedSortBy[dataIndex] = SORT.DESCENDING;
        break;
      case SORT.DESCENDING:
        updatedSortBy[dataIndex] = SORT.NO_SORT;
        break;
    }

    this.setState(
      {
        sortBy: updatedSortBy
      },
      this.runOperationsOnData
    );
  };

  private runOperationsOnData = () => {
    const filteredKeys = pickBy(this.state.sortBy, value => {
      return value !== SORT.NO_SORT;
    });

    const paginatedPages = { ...this.props.data };

    const newData = orderBy(
      paginatedPages,
      keys(filteredKeys),
      values(filteredKeys)
    );

    this.setState({
      data: newData
    });
  };
}

export default GridTable;
