import React, { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AuthContext from "../../contexts/auth";

export default function Settings(props) {
  const { user } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  const deleteUser = async (deleteId) => {
    const requestOptions = {
      method: 'delete',
      headers: {'Content-type': 'aplication/json'}
    }
    try{
      console.log(deleteId)
      await fetch('http://localhost:3000/person/'+ deleteId, requestOptions)
      setPerson(person.filter(person => person.id != deleteId))
    } catch(error){
      console.log("Erro: " + error)
    }
  }

  return (
    <View style={styles.page}>
      <LinearGradient
        style={styles.container}
        colors={["#e7977e", "#d88b9f"]}
      >
        <TouchableOpacity>
          <Image source={require('../../../../assets/circle.png')}
            style={styles.profileIcon} />
        </TouchableOpacity>

        <Text style={styles.name}>{user?.fullname}</Text>
        <Text style={styles.email}>{user?.email}</Text>

      </LinearGradient>
      <View>
        <View style={styles.configurations}>
          <TouchableOpacity
            onPress={() => { props.navigation.navigate('EditProfile') }} 
            style={styles.button}>
            <Icon name='key' size={22} color='#343434' />
            <Text style={styles.editText}>Senha</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}>
            <Icon name='sign-out-alt' size={22} color='#a17792' />
            <Text style={styles.exitText}>Sair</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View>
            <TouchableOpacity
              onPress={() => { props.navigation.navigate('RegisterWorker') }}
              style={styles.buttonService}>
              <Text style={styles.serviceText}>Quero anunciar um serviço</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View>
            <TouchableOpacity style={styles.button}
             onPress={ () => {deleteUser()}}>
              <Icon name='trash' size={22} color='#b52d2d' />
              <Text style={styles.deleteText}>Excluir conta</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}