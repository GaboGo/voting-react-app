import React, { Component } from "react";
import firebase from "firebase";
import "firebase/database";
import { DB_CONFIG } from "../config/config";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

//Created by Gabriel Goethe in April 2020

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      mainCard: []
    };

    this.handleVotingCard = this.handleVotingCard.bind(this);
  }
  
  componentDidMount() {
    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
    this.db = this.app.database().ref().child("boxes");
    this.mainCard = this.app.database().ref().child("mainCard");
    let {cards}  = this.state;
    let mainCard = this.state;

    this.mainCard.on("child_added", snap => {
      mainCard = {
        character: snap.val().character,
        section: snap.val().section,
        description: snap.val().description,
        time: snap.val().time,
        img: snap.val().img,
        votesDown: snap.val().votesDown,
        votesUp: snap.val().votesUp,
        total: snap.val().total
      };
      this.setState({ mainCard });
    });

    this.mainCard.on("child_changed", snap => {
      mainCard = {
        character: snap.val().character,
        section: snap.val().section,
        description: snap.val().description,
        time: snap.val().time,
        img: snap.val().img,
        votesDown: snap.val().votesDown,
        votesUp: snap.val().votesUp,
        total: snap.val().total
      };
      this.setState({ mainCard });
    });

    this.db.on("child_added", snap => {
      cards.push({
        id: snap.key,
        character: snap.val().boxContent.character,
        section: snap.val().boxContent.section,
        description: snap.val().boxContent.description,
        time: snap.val().boxContent.time,
        img: snap.val().boxContent.img,
        votesUp: snap.val().boxContent.votesUp,
        votesDown: snap.val().boxContent.votesDown,
        total: snap.val().boxContent.total
      });
      this.setState({ cards });
    });
    this.db.on("child_changed", snap => {
      cards.forEach((card, index) => {
        if (card.id === snap.key) {
          card.character = snap.val().boxContent.character;
          card.section = snap.val().boxContent.section;
          card.time = snap.val().boxContent.time;
          card.description = snap.val().boxContent.description;
          card.votesUp = snap.val().boxContent.votesUp;
          card.votesDown = snap.val().boxContent.votesDown;
          card.total = snap.val().boxContent.total;
          card.img = snap.val().boxContent.img;
        }
      });
      this.setState({ cards });
    });
  }

  handleVotingCard(card) {
    this.db.child(card.id).update({boxContent: card});
  }

  render() {
    let { mainCard, cards } = this.state;
    return (
      <div className="App">
        <Header
          character={mainCard.character}
          section={mainCard.section}
          time={mainCard.time}
          description={mainCard.description}
          img={mainCard.img}
          votesDown={mainCard.votesDown}
          votesUp={mainCard.votesUp}
        />
        <Main handleVoting={this.handleVotingCard} cards={cards} />
        <Footer />
      </div>
    );
  }
}

export default App;
