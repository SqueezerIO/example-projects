var React = require('react');
var ReactDOMServer = require('react-dom/server');
import MyComponent from './component';

class Index extends React.Component {
  render() {
    return (
      <MyComponent />
    )
  }
}

export default Index;
