import React from "react"
import { View, FlatList, SafeAreaView, Text, TouchableOpacity, onPress, StyleSheet, TextInput } from "react-native";
import AuthContext from "../contexts/auth";
import CurrencyInput from 'react-native-currency-input';
import registerWorker from ".";
import { Title, Button } from 'react-native-paper';


const Description = (props) => {
  const { description, setDescription, price, setPrice, finish } = props



  // function validateLogin() {
  //   if ((emailInput, passwordInput) !== '') {
  //     signIn({ email: emailInput, password: passwordInput })
  //   } else {
  //     setErrorMessage(null)
  //     setErrorMessage("Todos os campos são obrigatórios!*")
  //     // Vibration.vibrate()
  //     return;
  //   }
  // }

  return (
    <View>
      <Title style={styles.title}
      >Adicione uma breve descrição
        sobre o serviço a ser anunciado</Title>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.TextInput}
        placeholder="Maecenas auctor nunc nec gravida lacinia.">
      </TextInput>
      <Title style={styles.title}>
        Preço
      </Title>
      <CurrencyInput
        style={styles.CurrencyInput}
        value={price}
        onChangeValue={setPrice}
        prefix="$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="$0">
      </CurrencyInput>
      <Button style={styles.btn}
        mode='contained'
        onPress={finish}
        color='#fff'
        labelStyle={{ color: "#fad0d0", fontSize: 18 }}
      >
        Finalizar
      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    color: '#fdc9c9'
  },
  TextInput: {
    borderRadius: 15,
    borderColor: '#fff',
    margin: 20,
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {

    // backgroundColor: '#ff9796',
    padding: 8,
    width: '70%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // borderRadius: 30,
    // margin: '5%',
    // textAlign: 'center',
    // color: '#fff'
  },
  CurrencyInput: {
    marginBottom: '30%',
    borderRadius: 15,
    width: '30%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default Description