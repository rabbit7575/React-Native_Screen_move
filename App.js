import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
// 화면 이동
// 설치 목록
// 1. npm install @react-navigation/native
// 2. npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//    저는 아래와 같이 오류가... (This is related to npm not being able to find a file) 
//    오잉.. 무슨오류지 그래서 프로젝트 폴더에 node_modules를 삭제하고 다시 설치 해당 명령어를 입력해서 설치했더니 정상 설치 되었습니다 :). 
//    그리고 추가로 npm install 명령어로 삭제했었던 모듈을 설치해줘야합니다!
// 3. npm install @react-navigation/stack


// 메인 화면
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>react natvie navigation 테스트</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
// 상세 화면
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

class App extends Component {
 render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;