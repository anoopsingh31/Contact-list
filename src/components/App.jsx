import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt={props.alt} />
        </div>
        <div className="bottom">
          <p className="info">{props.info}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        className="circle-img"
        alt="avatar_img"
        info="+123 456 789"
        email="b@beyonce.com"
      />

      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        info="+987 654 321"
        email="jack@nowhere.com"
      />

      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        info="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </div>
  );
}

export default App;
