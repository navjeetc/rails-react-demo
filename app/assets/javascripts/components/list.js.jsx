var List = React.createClass({
  getInitialState() {
    return {
      itemsList: []
    }
  },

  propTypes: {
    items: React.PropTypes.array,
    title: React.PropTypes.string
  },

  handleDescriptionChange(e) {
    value = document.getElementById('input').value;
    this.props.items.push(value);
    this.setState({itemsList: this.props.items});
    console.log(value);
    console.log(this.props.items);
  },

  render: function() {
    items = this.props.items.map( function(item, index) {
      return (
        <Item description={item} key={index} />
      );
    });

    return (
      <div>
      <div>Title: {this.props.title}</div>
      <form>
        <input
         id='input'
         type="text" />

        <button onClick={this.handleDescriptionChange}>Submit</button>
      </form>
        {items}
      </div>
    );
  }
});
