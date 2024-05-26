import React from 'react';

const TestComponent = () => {
  return (
    <div className="p-10">
      <button type="button" className="btn btn-primary">
        Primary Button
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary Button
      </button>
      <div className="alert alert-info mt-4">
        <span>Info Alert</span>
      </div>
    </div>
  );
};

export default TestComponent;
