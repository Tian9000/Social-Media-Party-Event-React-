import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const eventsFormDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
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
    date: '2018-03-28',
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
    isOpen: false,
    selectedEvent: null
  }


  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    })
  }


  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    this.setState(({events}) => ({
      events: [...events, newEvent],
      isOpen: false
    }))
  }
  
    handleSelectEvent = (event) => {
      this.setState({
        selectedEvent: event,
        isOpen: true
      })
    }

    handleUpdateEvent = (updatedEvent) => {
      this.setState(({events}) => ({
        events: events.map(event => {
          if(event.id === updatedEvent.id){
            return{...updatedEvent}
          }else {
            return event
          }
        }),
          isOpen: false,
          selectedEvent: null
      }))
    }

    handleDeleteEvent = (id) => {
      this.setState(({events}) => ({
        events: events.filter(e => e.id !== id)
      }))
    }


  render() {
    const {events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList 
            events={events} 
            selectEvent={this.handleSelectEvent} 
            deleteEvent={this.handleDeleteEvent} 
          />
        </Grid.Column>
        <Grid.Column width={6}>
            <Button 
              onClick={this.handleCreateFormOpen} 
              positive content='Create Event' />
            {isOpen && ( 
              <EventForm
                  key={selectedEvent ? selectedEvent.id : 0}
                  updateEvent={this.handleUpdateEvent}
                  selectedEvent={selectedEvent} 
                  createEvent={this.handleCreateEvent}
                  cancelFormOpen={this.handleFormCancel} 
                />
              )}
        </Grid.Column>
      </Grid>
    );
  }
}
  
    

export default EventDashboard;