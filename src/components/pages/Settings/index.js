import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AuthContext from "../../contexts/auth";

export default function Settings(props) {
  const { user } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);
  const [person, setPerson] = useState([])

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
      await fetch('http://localhost:3000/users/'+ deleteId, requestOptions)
      setPerson(person.filter(person => person.idPerson != deleteId))
    } catch(error){
      console.log("Erro: " + error)
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../../../../assets/circle.png')}
            style={styles.profileIcon} />
        </TouchableOpacity>

        <Text style={styles.name}>{user?.fullname}</Text>
        <Text style={styles.email}>{user?.email}</Text>

      </View>
      <View>
        <View style={styles.configurations}>
          <View>
            <TouchableOpacity
              onPress={() => { props.navigation.navigate('RegisterWorker') }}
              style={styles.button}>
              <Icon style={styles.icon} name='star' size={20} color='#F85C70' />
              <Text style={styles.serviceText}>Quero anunciar um serviço</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => { props.navigation.navigate('EditProfile') }}
            style={styles.button}>
            <Icon style={styles.icon} name='edit' size={20} color='#3f4040' />
            <Text style={styles.editText}>Editar conta</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View>
            <TouchableOpacity style={styles.button}
              onPress={() => { deleteUser() }}>
              <Icon style={styles.icon} name='trash-alt' size={19} color='#b52d2d' />
              <Text style={styles.deleteText}>Excluir conta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.buttonExit}
            onPress={handleSignOut}>
            <Icon style={styles.icon} name='sign-out-alt' size={20} color='#fff' />
            <Text style={styles.exitText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}