import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Info extends Component {
  render() {
    const links = this.props.links.map(
      link => this.makeLink(link)
    );

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <List component="nav">{ links }</List>
      </div>
    );
  }

  makeLink(link) {
    return (
      <ListItem button component="a" key={link._id} href={link.url} target="_blank">
        <ListItemText primary={link.title} />
      </ListItem>
    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Info);
