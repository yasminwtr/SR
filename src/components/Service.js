import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/service'
import AuthRoutes from './pages/services/routes/auth.routes'

export const Service = (props) => {
  return (
    <View style={styles.container1}>
      <TouchableOpacity
      style={styles.buttonService}
        onPress={() => {
          props.navigation.navigate('RegisterWorker')
        }}>


        <Text style={styles.textButtonService}>
          Quero Prestar Serviços
        </Text>


      </TouchableOpacity>
      <Text style={styles.text}>
        Serviços Disponíveis
      </Text>
      <View style={styles.container3}>
        <View style={styles.container4}>


          <TouchableOpacity onPress={() => {
          props.navigation.navigate('Worker')}}>
            <Image source={require('../../assets/diarista.png')} style={styles.imagem1} />
          </TouchableOpacity>
          <Text style={styles.legenda}>
            Diarista
          </Text>


          <TouchableOpacity onPress={() => {
          props.navigation.navigate('RegisterWorker')}}>
          <Image source={require('../../assets/manicure.png')} style={styles.imagem2} />
          </TouchableOpacity>
          <Text
          style={styles.legenda}>
            Manicure
          </Text>

          <TouchableOpacity onPress={() => {
          props.navigation.navigate('RegisterWorker')}}>
          <Image source={require('../../assets/costureira.png')} style={styles.imagem3} />
          </TouchableOpacity>
          <Text style={styles.legenda}>
            Costureira
          </Text>


          <TouchableOpacity onPress={() => {
          props.navigation.navigate('RegisterWorker')}}>
          <Image source={require('../../assets/maridodealuguel.png')} style={styles.imagem4} />
          </TouchableOpacity>
          <Text style={styles.legenda}>
            Marido de aluguel
          </Text>
        </View>
        <View style={styles.container5}>


        <TouchableOpacity onPress={() => {
          props.navigation.navigate('RegisterWorker')}}>
          <Image source={require('../../assets/eletricista.png')} style={styles.imagem5} />
          </TouchableOpacity>
          <Text style={styles.legenda}>
            Eletricista
          </Text>


          <TouchableOpacity onPress={() => {
          props.navigation.navigate('RegisterWorker')}}>
            <Image source={require('../../assets/maquiadora.png')} style={styles.imagem6} />
          </TouchableOpacity>
          <Text style={styles.legenda}>
            Maquiadora
          </Text>


          <TouchableOpacity onPress={() => {
          props.navigation.navigate('RegisterWorker')}}>
            <Image source={require('../../assets/pintor.png')} style={styles.imagem7} />
          </TouchableOpacity>
          <Text style={styles.legenda}>
            Pintor
          </Text>


          <TouchableOpacity onPress={() => {
          props.navigation.navigate('RegisterWorker')}}>
            <Image source={require('../../assets/jardineiro.png')} style={styles.imagem8} />
          </TouchableOpacity>
          <Text style={styles.legenda}>
            Jardineiro
          </Text>



        </View>
      </View>
    </View>
  )
}

export default Service