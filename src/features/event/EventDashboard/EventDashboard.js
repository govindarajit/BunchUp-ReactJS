import React from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventsDashboard = [
  {
    id: "1",
    title: "Machine Learning Workshop At Coding Blocks",
    date: "2018-03-27T11:00:00+00:00",
    category: "Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Delhi, India",
    venue: "Coding Blocks, Dwarka",
    hostedBy: "Sanket Singh",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/24.jpg",
    attendees: [
      {
        id: "a",
        name: "Sarthak",
        photoURL: "https://randomuser.me/api/portraits/men/25.jpg"
      },
      {
        id: "b",
        name: "Rishab",
        photoURL: "https://randomuser.me/api/portraits/men/26.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "GSoC Meetup At Coding Blocks",
    date: "2018-03-28T14:00:00+00:00",
    category: "Technology and Culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Noida, India",
    venue: "Coding Blocks Noida, Uttar Pradesh, India",
    hostedBy: "Rishabh Bansal",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/69.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/54.jpg"
      }
    ]
  }
];

class EventDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: eventsDashboard,
      isOpen: false
    };

    // this.handleFormOpen = this.handleFormOpen.bind(this); Use this when not using arrow function
  }

  handleFormOpen = msg => {
    console.log(msg);
    this.setState({ isOpen: true });
  };

  handleFormCancel = () => {
    this.setState({ isOpen: false });
  };

  render = () => {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={() => this.handleFormOpen("Clicked")}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm handleCancel={this.handleFormCancel} />
          )}
        </Grid.Column>
      </Grid>
    );
  };
}

export default EventDashboard;
