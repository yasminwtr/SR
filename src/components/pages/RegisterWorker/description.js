import React from "react"
import { View, FlatList, SafeAreaView, Text, TouchableOpacity, onPress, StyleSheet, TextInput } from "react-native";
import AuthContext from "../contexts/auth";
import CurrencyInput from 'react-native-currency-input';
import registerWorker from ".";

const Description = (props) => {
  const { description, setDescription, price, setPrice, finish } = props

  return (
    <View>
      <Text style={styles.title}
      >Adicione uma breve descrição
        sobre o serviço a ser anunciado</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.TextInput}
        placeholder="Maecenas auctor nunc nec gravida lacinia.">
      </TextInput>
      <CurrencyInput
        style={styles.CurrencyInput}
        value={price}
        onChangeValue={setPrice}
        prefix="$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="Definir">
      </CurrencyInput>
      <TouchableOpacity
        onPress={finish}
      >
        <Text style={styles.btn}>
          Próximo Passo
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30
  },
  TextInput: {
    borderColor: '#fff',
    margin: 20,
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 30
  },
  btn: {
    backgroundColor: '#ff9796',
    padding: 10,
    borderRadius: 30,
    margin: '5%',
    textAlign: 'center',
    color: '#fff'
  },
  CurrencyInput: {
    width: '20%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    flexDirection: 'row'
  }
});

export default Description