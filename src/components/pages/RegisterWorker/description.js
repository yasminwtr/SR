import React from "react"
import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text, Linking } from "react-native";
import CurrencyInput from 'react-native-currency-input';
import { Title, Button } from 'react-native-paper';
import styles from "./styles";

const Description = (props) => {
  const { description, setDescription, price, setPrice, localization, setLocalization, whatsapp, setWhatsapp, finish } = props

  return (
    <View>
      <ScrollView>
      <Title style={styles.textDescription}>
        Adicione uma breve descrição sobre o serviço a ser anunciado
      </Title>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.inputDescription}
        multiline = {true}
        placeholder="Descreva os serviços que você realiza"
        maxLength={300}
      />

      <Title style={styles.titleInput}>
        Preço médio dos seus serviços
      </Title>
      <CurrencyInput
        style={styles.currencyInput}
        value={price}
        onChangeValue={setPrice}
        prefix="R$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="R$0"
        />

      <Title style={styles.titleInput}>
        Preencha a localização a qual você realiza os seus serviços
      </Title>
      <TextInput
        value={localization}
        onChangeText={setLocalization}
        style={styles.input}
        maxLength={100}
        placeholder="Cidade (ex: Florianópolis)"
      />

      <TextInput
        style={styles.input2}
        maxLength={100}
        placeholder="Estado (ex: Santa Catarina)"
      />

      <Title style={styles.titleInput}>
        Adicione o seu link para o WhatsApp personalizado.
      </Title>
      <TouchableOpacity
      style={styles.titleInput}
      onPress={() => {Linking.openURL('https://www.convertte.com.br/gerador-link-whatsapp/')}}> 
        <Text>(clique aqui)</Text>
      </TouchableOpacity>
      <TextInput
        value={whatsapp}
        onChangeText={setWhatsapp}
        style={styles.input}
        maxLength={100}
        placeholder="Cole o link gerado aqui"
      />

      <TouchableOpacity style={styles.btn} onPress={finish}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
        Finalizar
        </Text>
      </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

export default Description