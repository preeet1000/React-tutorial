import React from "react";
import ReactDOM from "react-dom/client";
// import {createElement}from 'react';

// const heading1 = React.createElement('h1', { id: 'heading1' }, 'Namaste React');
// const heading2 = React.createElement('h2', { id: 'heading2' }, 'Namaste React4');
// const container = React.createElement('div', { className: 'container' }, [heading1, heading2]);
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const heading1 = createElement('h1', { id: 'heading1', key:'h1' }, 'Namaste React');
// const heading2 = createElement('h2', { id: 'heading2',  key:'h2'  }, 'Namaste React2');
// const container = createElement('div', { className: 'container' }, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element
const heading = <h1>Namaste react element !!</h1>;
const ParagraphComponent = () => <p>This is paragraph component</p>;
const someXYZVariable = 200;
const HomeComponent = () => {
  return (
    <div>
      using react element - {heading}
      using normal function way - {ParagraphComponent()}
      using component way also called Component Composition-{" "}
      <ParagraphComponent />
      {someXYZVariable}
      <h1>Namaste Inside Component1 !!</h1>
    </div>
  );
};
// root.render(container);
// root.render(heading);
root.render(<HomeComponent />);
