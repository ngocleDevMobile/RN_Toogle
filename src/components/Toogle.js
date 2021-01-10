import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Toogle = React.memo((props) => {
  const [moveAnimation, setMoveAnimation] = useState(
    new Animated.ValueXY({x: 0, y: 0}),
  );
  const [image, setImage] = useState('gray');

  const _moveBall = () => {
    if (props.open) {
      props.setOpen(!props.open);
      Animated.spring(moveAnimation, {
        toValue: {x: 0, y: 0},
      }).start();
    } else {
      props.setOpen(!props.open);
      Animated.spring(moveAnimation, {
        toValue: {x: 35, y: 0},
      }).start();
    }
  };
  return (
    <View style={styles.btnContainer}>
      <View
        style={{
          justifyContent: 'center',
          borderRadius: 80,
          backgroundColor: props.open ? '#3471DF' : 'gray',
          padding: 4,
        }}>
        <Animated.View style={[styles.tennisBall, moveAnimation.getLayout()]}>
          <TouchableWithoutFeedback style={styles.button} onPress={_moveBall}>
            <View style={styles.button} />
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tennisBall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    width: 25,
    height: 25,
  },
  button: {
    borderRadius: 100,
    width: 25,
    height: 25,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  btnContainer: {
    width: 68,
  },
});

export default Toogle;
