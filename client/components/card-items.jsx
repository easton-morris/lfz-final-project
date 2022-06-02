import React from 'react';

export default class CardItems extends React.Component {
  constructor(props) {
    super(props);

    this.removeHandler = this.removeHandler.bind(this);
    this.CardItem = this.CardItem.bind(this);
    this.CardItemsBody = this.CardItemsBody.bind(this);

    this.state = {
      cardToRemove: null
    };
  }

  removeHandler(event) {
    // console.log('currtar', event.currentTarget);
    // console.log('tar', event.target);
    // console.log('cardId', event.currentTarget.data);
    this.props.selCardToRemove(this.props.card);
  }

  CardItem(props) {
    return (
      <div className="col-4">
        <div className="container">
          <div className="card shadow-sm">
            <h4 className="card-title">{props.cardName}</h4>
            <h5 className="card-subtitle mb-2 text-muted">{props.setName}</h5>
            <img className="img-thumbnail" src={props.cardImg} alt={props.cardName} />
            <div onClick={this.removeHandler} data={props.cardId} className="card-body">
              <p className="card-text">{props.cardId}</p>
              <div className="row justify-content-end">
                <div className="btn-group col-4">
                  <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmDelModal">Remove</button>
                </div>
              </div>
            </div>
            <div className="card-footer">
            </div>
          </div>
        </div>
      </div>
    );
  }

  CardItemsBody() {
    const cardList = this.props.list;
    const cardItems = cardList.map(card => {
      return <this.CardItem key={card.cardId} cardId={card.cardId} cardName={card.cardName} setName={card.setName} cardImg={card.largePic} fullCard={card} flavorText="missing" />;
    }
    );
    return (
      <>
      {cardItems}
      </>
    );
  }

  render() {
    if (this.props.list.length > 0) {
      return (
        <div className="container">
          <div className="row g-4">
            <this.CardItemsBody />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
