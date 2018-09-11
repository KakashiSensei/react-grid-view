import Context from ".";
import * as React from "react";

interface IProps {
  state: any;
}
class MyProvider extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <Context.Provider value={this.props.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default MyProvider;
