//let data = [
  //{author: "Jeff", text: "This is a __comment__"},
  //{author: "Jordan Walke", text: "This is most certainly NOT *another* comment"}
//];
let Comment = React.createClass({
  render() {
    let rawMarkup = marked(this.props.children.toString());
    return (
      <div className="comment">
        <h4 className="commentAuthor">{this.props.author}</h4>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});
 
//let CommentList = React.createClass({
class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.data.map((comment) => {
      return (
        <Comment key={comment.author} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        {commentNodes}
      </div>
    );
  }
};

//let Erpa = React.createClass({
class Erpa extends React.Component {
  render() {
    return <h1>ErpaDerpa+ {this.props.me}</h1>
  }
};
class CommentForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let author = React.findDOMNode(this.refs.author).value.trim();
    let text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    };
    // TODO: send request to the server
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author"/>
        <input type="text" placeholder="Say something..." ref="text"/>
        <input type="submit" value="Post" />
      </form>
    );
  }
};
//let HelloMessage = React.createClass({
class HelloMessage extends React.Component {
  //getInitialState() {
    //return {data: [{author:'me',text:'stuff'}]};
  //}
  // initial state:
  state = {data: [{author:'me',text:'stuff'}]}
  loadCommentsFromServer = () => {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  handleCommentSubmit = (comment) => {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(xhr, this.props.url, status, err.toString());
      }
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div>
        <Erpa  me="Jeff"/>
        <div>Hellorpa {this.props.name}</div>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <h3>Comments</h3>
        <CommentList data={this.state.data}/>
      </div>
      );
  }
};
//url="comment.json" data={data}
React.render(
  <HelloMessage url="comment.json"  name="Oblio and Arrow" pollInterval={20000} />,
  document.getElementById('example')
);
