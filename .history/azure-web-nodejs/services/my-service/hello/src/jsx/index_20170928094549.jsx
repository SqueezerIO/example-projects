import Html from '../../../../../main/jsx/html';
import Header from '../../../../../main/jsx/Header';
import Footer from '../../../../../main/jsx/Footer';
import MyComponent from './component';

const Index = () => {
  return (
    <Html title="Hello World!">
      <Header />
      <MyComponent />
      <Footer />
    </Html>
  );
};

export default Index;