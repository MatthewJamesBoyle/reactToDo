import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    paddingTop:150,
    backgroundColor:'#f7f7f7'

  },
  input:{
    borderWidth:1,
    borderColor:'#D7D7D7',
    height:50,
    marginLeft:10,
    marginRight:10,
    padding:15,
    borderRadius: 3,

  },
  buttonText:{
    fontSize:18,
    fontWeight:'600',
    color: '#FAFAFA',

  },
  button:{
    height:45,
    alignSelf:'stretch',
    backgroundColor:'#05A5D1',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',

  },
  cancelButton:{
    backgroundColor:'#666'

  }
});


class TaskForm  extends React.Component{
  constructor(props,context){
    super(props,context);
}

  render(){
    return(

      <View style={styles.container}>
      <TextInput
      onChangeText={this.onChange.bind(this)}
       style={styles.input}/>
      <TouchableHighlight style={styles.button}
      onPress= {this.onAddPressed.bind(this)}>
      <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
      <TextInput/>
      <TouchableHighlight
      onPress= {this.props.onCancel}
       style={[styles.button,styles.cancelButton]}>
      <Text style={styles.buttonText}>Cancel</Text>
      </TouchableHighlight>

      </View>
    )
  }
  onChange(text){
    this.task=text;
  }
  onAddPressed(){
    this.props.onAdd(this.task);
  }

}

TaskForm.PropTypes= {
onAdd: React.PropTypes.func.isRequired,
onCancel: React.PropTypes.func.isRequired,
};



export default TaskForm;
