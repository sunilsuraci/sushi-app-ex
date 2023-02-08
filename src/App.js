import Navbar from './components/navbar';
import Card from './components/card';
import React, { Component } from 'react';
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: 'California', prezzo: 2.99, immagine: california },
      { id: 1, nome: 'dragon', prezzo: 2.99, immagine: dragon, quantità: 0 },
      { id: 2, nome: 'dynamite', prezzo: 2.99, immagine: dynamite, quantità: 0 },
      { id: 3, nome: 'philadelphia', prezzo: 2.99, immagine: philadelphia, quantità: 0 },
      { id: 4, nome: 'rainbow', prezzo: 2.99, immagine: rainbow, quantità: 0 },
      { id: 5, nome: 'shrimp', prezzo: 2.99, immagine: shrimp, quantità: 0 },


    ]
  }
handleDelete = cardId => {
  const cards = this.state.cards.filter(card => card.id !== cardId)
  this.setState({ cards })
}

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                card={card} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
