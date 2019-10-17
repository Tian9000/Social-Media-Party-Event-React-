import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

//import EventListItem from '../EventList/EventListItem';
//import { Grid, Loader } from 'semantic-ui-react';
// import { firestoreConnect } from 'react-redux-firebase';
// import { connect } from 'react-redux';
//import EventList from '../EventList/EventList';
// import EventListItem from '../../EventList/EventListItem';
// import { getEventsForDashboard } from '../eventActions';
// import LoadingComponent from '../../../app/layout/LoadingComponent';
// import EventActivity from '../EventActivity/EventActivity';

const eventsFormDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Margaret',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/32.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Margaret',
        photoURL: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      {
        id: 'b',
        name: 'Alea',
        photoURL: 'https://randomuser.me/api/portraits/women/12.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Alea',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/12.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Alea',
        photoURL: 'https://randomuser.me/api/portraits/women/12.jpg'
      },
      {
        id: 'a',
        name: 'Margaret',
        photoURL: 'https://randomuser.me/api/portraits/women/32.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
  state = {
    events: eventsFormDashboard,
    isOpen: false
  }

  handleIsOpenToggle = () => {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen
      }))
  }

  render() {
    const {events, isOpen} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList events={events}/>
        </Grid.Column>
        <Grid.Column width={6}>
            <Button onClick={this.handleIsOpenToggle} positive content='Create Event' />
            {isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle} />}
        </Grid.Column>
      </Grid>
    );
  }
}
  
    

export default EventDashboard;