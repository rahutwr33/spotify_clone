import React, { Component } from 'react'
import { Text, View,PanResponder,StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { Sidebar_SCREEN,TAB1_SCREEN,TAB2_SCREEN } from '../../navigation';

export default class HomeScreen extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
        
        }
      }

    // navigationButtonPressed({ buttonId }) {
    //   const { data } = this.props;
    //   switch (buttonId) {
    //     case 'sidebar_btn': {
    //       Navigation.mergeOptions('leftDrawer', {
    //         sideMenu: {
    //           left: {
    //             visible: true
    //           }
    //         }
    //       });
    //       break;
    //     }
    //     default:
    //       break;
    //   }
    // }
  
    render() {
      console.log('this.state', this.state)
        return (
           <View style = { styles.MainContainer }>
                <Text>jhghjgjhgjhgjhg</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
      MainContainer:
      {
          flex: 1,
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      }
  });
