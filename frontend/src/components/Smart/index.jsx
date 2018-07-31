import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Clearfix,
   Well, Tooltip, OverlayTrigger,
   ProgressBar, Tabs, Tab } from "react-bootstrap";
import Card from '../Card';
import HistoryTable from '../HistoryTable';
import Skew from '../Skew';
import AdminTable from '../AdminTable';
const ADMIN = window.ADMIN
class Smart extends React.Component {

  componentWillMount() {
      this.props.fetchCards();
  }

  render(){
    const { message, cards, passCard, annotateCard,
    history_data, getHistory, labels, changeLabel,
    changeToSkip, getUnlabeled, unlabeled_data,
    skewLabel, getLabelCounts, label_counts, getAdmin, admin_data,
    adminLabel} = this.props;

    var progress = 100;
    var start_card = 0;
    var num_cards = 0;
    var label = "Complete";
    if(!(cards === undefined) && cards.length > 0)
    {
        num_cards = cards[cards.length-1].id + 1;
        start_card = cards[0].id + 1;
        progress = (cards[0].id/cards[cards.length-1].id) * 100;
        label = start_card.toString()+" of "+num_cards.toString();
    }
    if (!(cards === undefined) && cards.length > 0) {
      var card = (
      <Card className="full" key={cards[0].id}>
          <h2>Card {cards[0].id + 1}</h2>
          <p>
              { cards[0].text['text'] }
          </p>
          <ButtonToolbar bsClass="btn-toolbar pull-right">
              {cards[0].options.map( (opt) => (
                  <Button onClick={() => annotateCard(cards[0], opt['pk'])}
                  bsStyle="primary"
                  key={`deck-button-${opt['name']}`}>{opt['name']}</Button>
              ))}
              <OverlayTrigger
              placement = "top"
              overlay={
                <Tooltip id="skip_tooltip">
                  Clicking this button will send this document to an administrator for review
                </Tooltip>
              }>
                <Button onClick={() => passCard(cards[0])}
                bsStyle="info">Skip</Button>
              </OverlayTrigger>
          </ButtonToolbar>
          <Clearfix />
      </Card>);
    }
    else {
        let blankDeckMessage = (message) ? message : "No more data to label at this time. Please check back later";
        card = (
            <Well bsSize="large">
                { blankDeckMessage }
            </Well>
        );
    }

    return (
      <Tabs defaultActiveKey={1} id="data_tabs" >
        <Tab eventKey={1} title="Annotate Data">
        <div className="deck">
          <ProgressBar >
            <ProgressBar
            style={{minWidth: 60}}
            label={label}
            now={progress}/>
          </ProgressBar>
            {card}
        </div>
        </Tab>
        <Tab eventKey={2} title="History" className="full card">
          <div className="cardface">
          <HistoryTable
            getHistory={getHistory}
            history_data={history_data}
            labels={labels}
            changeLabel={changeLabel}
            changeToSkip={changeToSkip}
          />
          </div>
        </Tab>
        <Tab eventKey={3} disabled={!ADMIN} title="Fix Skew" className="full card">
          <div className="cardface">
            <Skew
            getUnlabeled={getUnlabeled}
            unlabeled_data={unlabeled_data}
            labels={labels}
            skewLabel={skewLabel}
            getLabelCounts={getLabelCounts}
            label_counts={label_counts}
            />
          </div>
        </Tab>
        <Tab eventKey={4} disabled={!ADMIN} title="Skipped Cards" className="full card">
          <div className="cardface">
            <AdminTable
            getAdmin={getAdmin}
            admin_data={admin_data}
            labels={labels}
            adminLabel={adminLabel}
            />
          </div>
        </Tab>
      </Tabs>
    );

  };
}
Smart.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    message: PropTypes.string,
    history_data: PropTypes.arrayOf(PropTypes.object),
    getHistory: PropTypes.func.isRequired,
    labels: PropTypes.arrayOf(PropTypes.object),
    changeLabel: PropTypes.func.isRequired,
    changeToSkip: PropTypes.func.isRequired,
    getUnlabeled: PropTypes.func.isRequired,
    unlabeled_data: PropTypes.arrayOf(PropTypes.object),
    label_counts: PropTypes.arrayOf(PropTypes.object),
    skewLabel: PropTypes.func.isRequired,
    getLabelCounts: PropTypes.func.isRequired,
    getAdmin: PropTypes.func.isRequired,
    admin_data: PropTypes.arrayOf(PropTypes.object),
    adminLabel: PropTypes.func.isRequired,
    fetchCards: PropTypes.func.isRequired,
    annotateCard: PropTypes.func.isRequired,
    passCard: PropTypes.func.isRequired,
    popCard: PropTypes.func.isRequired,
};

export default Smart;
