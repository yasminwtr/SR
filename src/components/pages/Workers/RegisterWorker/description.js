import React from "react"
import { View, TextInput, ScrollView, TouchableOpacity, Text, Linking } from "react-native";
import CurrencyInput from 'react-native-currency-input';
import { Title } from 'react-native-paper';
import styles from "../styles";

const Description = (props) => {
  const { description, setDescription, price, setPrice, city, setCity, localization, setLocalization, whatsapp, setWhatsapp, finish } = props

  return (
    <ScrollView>
        <Title style={styles.textDescription}>
          1. Adicione uma breve descrição sobre o serviço a ser anunciado
        </Title>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={styles.inputDescription}
          multiline={true}
          placeholder="Descreva os serviços que você realiza"
          maxLength={300}
        />

        <Title style={styles.titleInput}>
          2. Preço médio dos seus serviços
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
          3. Preencha a localização a qual você realiza os seus serviços
        </Title>
        <TextInput
          value={city}
          onChangeText={setCity}
          style={styles.input}
          maxLength={25}
          placeholder="Cidade (ex: Florianópolis)"
        />

        <TextInput
          value={localization}
          onChangeText={setLocalization}
          style={styles.input2}
          maxLength={25}
          placeholder="Estado (ex: Santa Catarina)"
        />

        <Title style={styles.titleInput}>
          4. Adicione o seu link para o WhatsApp personalizado.
        </Title>
        <TouchableOpacity
          style={styles.titleInput}
          onPress={() => { Linking.openURL('https://www.convertte.com.br/gerador-link-whatsapp/') }}>
          <Text style={styles.link}>Clique aqui para gerar o link.</Text>
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
  )
}

export default Description