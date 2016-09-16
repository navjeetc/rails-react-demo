var List = React.createClass({

  getInitialState() {

    return {
      itemsList: this.props.items
    }
  },

  propTypes: {
    items: React.PropTypes.array,
    title: React.PropTypes.string
  },

  handleDescriptionChange(e) {
    var items = this.state.itemsList;
    value = document.getElementById('input').value;
    items.push(value);
    this.setState({itemsList: items});
    // blank out input form
    document.getElementById('input').value = '';
    e.preventDefault();
  },

  render: function() {
    list = this.state.itemsList;
    var items = list.map( function(item, index) {
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
