import Context from ".";
import * as React from "react";

interface IProps {
  value: any;
}
class MyProvider extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <Context.Provider value={this.props.value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default MyProvider;
