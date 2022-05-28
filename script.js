function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: placeholder });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });



    });}

  render() {
    const { text } = this.state;
    const markdown = marked.parse(text);


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "text-center text-light" }, "Editor..!"), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-light mt-4 text-center" }, "Enter your text here"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", className: "form-control", value: text,
        onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6", id: "preview" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-light mt-4 text-center" }, "Results here"), /*#__PURE__*/
      React.createElement("div", { className: "preview", dangerouslySetInnerHTML: { __html: markdown } })))));






  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));