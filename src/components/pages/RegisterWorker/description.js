import React from "react"
import { View, StyleSheet, TextInput } from "react-native";
import CurrencyInput from 'react-native-currency-input';
import { Title, Button } from 'react-native-paper';
import styles from "./styles";

const Description = (props) => {
  const { description, setDescription, price, setPrice, localization, setLocalization, whatsapp, setWhatsapp, finish } = props

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
      <Title style={styles.titleInput}>
        Adicione uma breve descrição sobre o serviço a ser anunciado
      </Title>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.TextInput}
        placeholder="Descreva os serviços que você faz."
        maxLength={100}
      />

      <Title style={styles.titleInput}>
        Preço médio dos seus serviços
      </Title>
      <CurrencyInput
        style={styles.CurrencyInput}
        value={price}
        onChangeValue={setPrice}
        prefix="$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="$0"
        />

      <Title style={styles.titleInput}>
        Preencha a localização a qual você realiza os seus serviços
      </Title>
      <TextInput
        value={localization}
        onChangeText={setLocalization}
        style={styles.TextInput}
        maxLength={100}
        placeholder="Florianópolis, Santa Catarina"
      />

      <Title style={styles.titleInput}>
        Caso você queira pode adicionar um link rápido para seu WhatsApp.
        Usamos o site Convertte para criá-los.
      </Title>
      <TextInput
        value={whatsapp}
        onChangeText={setWhatsapp}
        style={styles.TextInput}
        maxLength={100}
        placeholder="Cole o link gerado aqui"
      />

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

export default Description