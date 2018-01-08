import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,
  Right, Title, Drawer} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {

  state = {fontLoaded: false};

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('./assets/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  closeDrawer() {
    this.drawer._root.close();
  };

  openDrawer() {
    this.drawer._root.open();
  };


  static drawerContent = (
    <Container style={{flex: 1, backgroundColor: 'white'}}><Text>drawer content</Text></Container>
  );

  render() {

    if (!this.state.fontLoaded) {
      return (<Text style={{flex: 1, justifyContent: 'center'}}>Loading...</Text>);
    }

    if(this.state.fontLoaded) {
      return(
        <Drawer
          ref={ (ref) => this.drawer = ref }
          content={ App.drawerContent }
          onClose={ () => this.closeDrawer()} >

          <Container>
            <Header>
              <Left><Button transparent onPress={ () => this.openDrawer() }><Icon name='menu' /></Button></Left>
              <Body><Title>Header</Title></Body>
            </Header>
            <Content style={{padding: 10}}>

              <Card style={{width: '100%'}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('./assets/cardimage.png')} />
                    <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={require('./assets/cardimage.png')}  style={{height: 200, width: null, flex: 1}} />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Right><Text>Right Text</Text></Right>
                </CardItem>
              </Card>
            </Content>
          </Container>

        </Drawer>


      )
    }
  }

}
