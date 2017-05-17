
import React from 'react';
import {
  Text,
  TouchableHighlight,
  Animated,
  StyleSheet,
} from 'react-native';


export default function render(style) {
  const doneAnimation = new Animated.ValueXY();

  const localStyles = StyleSheet.create({
    row: {
      transform: doneAnimation.getTranslateTransform(),
    },
  });
  function animatedPress() {
    Animated.spring(doneAnimation, {
      tension: 2,
      friction: 3,
      toValue: {
        x: -500,
        y: 0,
      },
    }).start();
        
    setTimeout(() => {
      this.onDonePressed();
    }, 1000);
  }
  return (
    <Animated.View style={[style.container, localStyles.row]}>
      <Text style={style.label} >{this.props.todo.task}</Text>
      <TouchableHighlight
        onPress={animatedPress.bind(this)}
      >
        <Text>Done</Text>

      </TouchableHighlight>
    </Animated.View>
  );
}
