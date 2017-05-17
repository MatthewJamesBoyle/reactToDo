import React from 'react';

import {
  StyleSheet
} from 'react-native';

import Render from './Render';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  }
});

class TaskRow extends React.Component{
  onDonePressed() {
    this.props.onDone(this.props.todo);
  }
  render() {
    return Render.bind(this)(style);
  }
}

export default TaskRow;
