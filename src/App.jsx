import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-gray-300 p-4">Section 1</div>
        <div className="border border-gray-300 p-4">Section 2</div>
        <div className="border border-gray-300 p-4">Section 3</div>
      </div>
    </Layout>
  );
};

export default App;
