import React, { Component } from "react";
import firebase from "firebase";
import "firebase/database";
import { DB_CONFIG } from "../config/config";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
class App extends Component {
  state = {
    boxes: [],
    mainCard: [],
    editState: false
  };
  componentDidMount() {
    this.editState = false;
    this.app = !firebase.apps.length
      ? firebase.initializeApp(DB_CONFIG)
      : firebase.app();
    this.db = this.app
      .database()
      .ref()
      .child("boxes");
    this.mainCard = this.app
      .database()
      .ref()
      .child("mainCard");
    const { boxes } = this.state;
    let mainCard = this.state;

    this.mainCard.on("child_added", snap => {
      mainCard = {
        character: snap.val().character,
        section: snap.val().section,
        description: snap.val().description,
        time: snap.val().time,
        img: snap.val().img
      };
      this.setState({ mainCard });
    });

    this.mainCard.on("child_changed", snap => {
      console.log(mainCard);
      mainCard.forEach((card, index) => {
        card.character = snap.val().boxContent.title;
        card.section = snap.val().boxContent.responsible;
        card.time = snap.val().boxContent.time;
        card.description = snap.val().boxContent.description;
        card.votesUp = snap.val().boxContent.votesUp;
        card.votesDown = snap.val().boxContent.votesDown;
        card.total = snap.val().boxContent.total;
        card.img = snap.val().boxContent.img;
      });
      this.setState({ mainCard });
    });
    this.db.on("child_added", snap => {
      boxes.push({
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
      this.setState({ boxes });
    });
    this.db.on("child_changed", snap => {
      console.log(boxes);
      boxes.forEach((box, index) => {
        if (box.id === snap.key) {
          box.character = snap.val().boxContent.title;
          box.section = snap.val().boxContent.responsible;
          box.time = snap.val().boxContent.time;
          box.description = snap.val().boxContent.description;
          box.votesUp = snap.val().boxContent.votesUp;
          box.votesDown = snap.val().boxContent.votesDown;
          box.total = snap.val().boxContent.total;
          box.img = snap.val().boxContent.img;
        }
      });
      this.setState({ boxes });
    });
  }
  handleSwitchState(box, flag) {
    console.log(box);
    this.setState({ editState: flag });
  }
  handleVotingBox(id) {
    // logic
  }
  render() {
    const { mainCard, boxes } = this.state;
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
        <Main boxes={boxes} />
        <Footer />
      </div>
    );
  }
}

export default App;
