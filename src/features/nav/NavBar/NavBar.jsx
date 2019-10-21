import React, { Component } from 'react';

import { Menu, Container, Button } from 'semantic-ui-react';


// const actions = {
//   openModal
// }

// const mapState = (state) => ({
//   auth: state.firebase.auth,
//   profile: state.firebase.profile
// })

class NavBar extends Component {

  // handleSignIn = () => {
  //   this.props.openModal('LoginModal')
  // };

  // handleRegister = () => {
  //   this.props.openModal('RegisterModal')
  // }

  // handleSignOut = () => {
  //   this.props.firebase.logout();
  //   this.props.history.push('/')
  // };

  render() {
    // const { auth, profile } = this.props;
    // const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
            <Menu inverted fixed="top">
              <Container>
                <Menu.Item header>
                  <img src="/assets/logo.png" alt="logo" />
                  Event_Party
                </Menu.Item>
                <Menu.Item name="Events" />
                <Menu.Item>
                  <Button floated="right" positive inverted content="Create Event" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button basic inverted content="Login" />
                  <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
              </Container>
            </Menu>
      // <Menu inverted fixed="top">
      //   <Container>
      //     <Menu.Item as={Link} to="/" header>
      //       <img src="/assets/logo.png" alt="logo" />
      //       Re-vents
      //     </Menu.Item>
      //     <Menu.Item as={NavLink} to="/events" name="Events" />
      //     <Menu.Item as={NavLink} to="/test" name="Test" />
      //     {authenticated &&
      //     <Menu.Item as={NavLink} to="/people" name="People" />}
      //     {authenticated &&
      //     <Menu.Item>
      //       <Button
      //         as={Link}
      //         to="/createEvent"
      //         floated="right"
      //         positive
      //         inverted
      //         content="Create Event"
      //       />
      //     </Menu.Item>}
      //     {authenticated ? (
      //       <SignedInMenu auth={auth} profile={profile} signOut={this.handleSignOut} />
      //     ) : (
      //       <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
      //     )}
      //   </Container>
      // </Menu>
    );
  }
}

export default NavBar;
