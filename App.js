import React, {useState, useEffect} from 'react';
import {View, Text, LogBox} from 'react-native';
import RN_toogle from './src/components/Toogle';

const App = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#e27802', fontSize: 25, flexWrap: 'wrap'}}>Custom Toogle Switch(Android,Ios)</Text>
      <RN_toogle
        open={visible}
        setOpen={setVisible}
      />
    </View>
  );
};

export default App;
