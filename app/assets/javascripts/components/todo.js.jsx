class Todo extends React.Component {
  constructor() {
    super();
    this.state = { itemsList: [] };
  }

  render () {
    return (
       <div >
        Not To Do List
        <List items={this.state.itemsList} />
      </div>
    );
  }
}

