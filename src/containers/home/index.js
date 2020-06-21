import React, { Component } from 'react'
import { Text, View,PanResponder,StyleSheet ,Button} from 'react-native'
import { Navigation } from 'react-native-navigation';
import { Sidebar_SCREEN,TAB1_SCREEN,TAB2_SCREEN } from '../../navigation';

export default class HomeScreen extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
        
        }
        Navigation.events().bindComponent(this);
      }
    
    navigationButtonPressed({ buttonId }) {
        console.log("buttonID" ,buttonId )
        if (buttonId === 'sidebar_btn') {
          Navigation.mergeOptions('leftDrawer', {
            sideMenu: {
              left: {
                visible: true
              }
            }
          });
        }
      }

    render() {
      console.log('this.state', this)
        return (
           <View style = { styles.MainContainer }>
                <Text>jhghjgjhgjhgjhg</Text>
                <View  style={{justifyContent:'flex-start',alignItems:'center'}}> 
                   <Button onPress={() => {                    
                    // Navigation.mergeOptions(this.props.componentId, {
                    //     sideMenu: {
                    //       left: {
                    //         visible: true,
                    //       },
                    //     },
                    //   });
                   }}  title="Click me"></Button>
                </View>
            </View>
        )
    }
    // navigationButtonPressed({ buttonId }) {
    //     if (buttonId === 'sidebar_btn') {
    //       Navigation.mergeOptions(this, {
    //         sideMenu: {
    //           left: {
    //             visible: true
    //           }
    //         }
    //       });
    //     }
    //   }
}
const styles = StyleSheet.create({
      MainContainer:
      {
          flex: 1,
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      }
  });
