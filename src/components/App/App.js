import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Read a book',
        isDone: false,
        id: 1
      },
      {
        value: 'Cook a pie',
        isDone: false,
        id: 2
      },
      {
        value: 'Go for a walk',
        isDone: false,
        id: 3
      }
    ],
    count: 3
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
    const newItem = { ...item };
    if (item.id === id) {
      newItem.isDone = !item.isDone;
    }

      return newItem;
    })

    this.setState({ items: newItemList });
  }

  onClickDelete = id => this.setState(state => ({
    items: state.items.filter(item => item.id !== id)
  }));

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value: value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Important things to do:</h1>
        <InputItem onClickAdd={this.onClickAdd} />
        <ItemList
          items={this.state.items}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer count={this.state.count} />
      </div>
    );
  }
};

export default App;
