//let data = [
//{author: "Jeff", text: "This is a __comment__"},
//{author: "Jordan Walke", text: "This is most certainly NOT *another* comment"}
//];
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Comment = React.createClass({
  displayName: "Comment",

  render: function render() {
    var rawMarkup = marked(this.props.children.toString());
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h4",
        { className: "commentAuthor" },
        this.props.author
      ),
      React.createElement("span", { dangerouslySetInnerHTML: { __html: rawMarkup } })
    );
  }
});

//let CommentList = React.createClass({
var CommentList = (function (_React$Component) {
  function CommentList() {
    _classCallCheck(this, CommentList);

    _get(Object.getPrototypeOf(CommentList.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(CommentList, _React$Component);

  _createClass(CommentList, [{
    key: "render",
    value: function render() {
      var commentNodes = this.props.data.map(function (comment) {
        return React.createElement(
          Comment,
          { key: comment.author, author: comment.author },
          comment.text
        );
      });
      return React.createElement(
        "div",
        null,
        commentNodes
      );
    }
  }]);

  return CommentList;
})(React.Component);

;

//let Erpa = React.createClass({
var Erpa = (function (_React$Component2) {
  function Erpa() {
    _classCallCheck(this, Erpa);

    _get(Object.getPrototypeOf(Erpa.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(Erpa, _React$Component2);

  _createClass(Erpa, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "ErpaDerpa+ ",
        this.props.me
      );
    }
  }]);

  return Erpa;
})(React.Component);

;

var CommentForm = (function (_React$Component3) {
  function CommentForm() {
    var _this = this;

    _classCallCheck(this, CommentForm);

    _get(Object.getPrototypeOf(CommentForm.prototype), "constructor", this).apply(this, arguments);

    this.handleSubmit = function (e) {
      e.preventDefault();
      var author = React.findDOMNode(_this.refs.author).value.trim();
      var text = React.findDOMNode(_this.refs.text).value.trim();
      if (!text || !author) {
        return;
      };
      // TODO: send request to the server
      _this.props.onCommentSubmit({ author: author, text: text });
      React.findDOMNode(_this.refs.author).value = "";
      React.findDOMNode(_this.refs.text).value = "";
      return;
    };
  }

  _inherits(CommentForm, _React$Component3);

  _createClass(CommentForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { className: "commentForm", onSubmit: this.handleSubmit },
        React.createElement("input", { type: "text", placeholder: "Your name", ref: "author" }),
        React.createElement("input", { type: "text", placeholder: "Say something...", ref: "text" }),
        React.createElement("input", { type: "submit", value: "Post" })
      );
    }
  }]);

  return CommentForm;
})(React.Component);

;
//let HelloMessage = React.createClass({
var HelloMessage = (function (_React$Component4) {
  function HelloMessage() {
    var _this2 = this;

    _classCallCheck(this, HelloMessage);

    _get(Object.getPrototypeOf(HelloMessage.prototype), "constructor", this).apply(this, arguments);

    this.state = { data: [{ author: "me", text: "stuff" }] };

    this.loadCommentsFromServer = function () {
      $.ajax({
        url: _this2.props.url,
        dataType: "json",
        cache: false,
        success: function success(data) {
          _this2.setState({ data: data });
        },
        error: function error(xhr, status, err) {
          console.error(_this2.props.url, status, err.toString());
        }
      });
    };

    this.handleCommentSubmit = function (comment) {
      $.ajax({
        url: _this2.props.url,
        dataType: "json",
        type: "POST",
        data: comment,
        success: function success(data) {
          _this2.setState({ data: data });
        },
        error: function error(xhr, status, err) {
          console.error(xhr, _this2.props.url, status, err.toString());
        }
      });
    };
  }

  _inherits(HelloMessage, _React$Component4);

  _createClass(HelloMessage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Erpa, { me: "Jeff" }),
        React.createElement(
          "div",
          null,
          "Hellorpa ",
          this.props.name
        ),
        React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit }),
        React.createElement(
          "h3",
          null,
          "Comments"
        ),
        React.createElement(CommentList, { data: this.state.data })
      );
    }
  }]);

  return HelloMessage;
})(React.Component);

;
//url="comment.json" data={data}
React.render(React.createElement(HelloMessage, { url: "comment.json", name: "Oblio and Arrow", pollInterval: 20000 }), document.getElementById("example"));

//getInitialState() {
//return {data: [{author:'me',text:'stuff'}]};
//}
// initial state: