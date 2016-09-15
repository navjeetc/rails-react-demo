var Item = React.createClass({
  getInitialState() {
    return {
      decription: ''
    }
  },

  propTypes: {
    description: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Item: {this.props.description}</div>
        </div>
    );
  }
});
