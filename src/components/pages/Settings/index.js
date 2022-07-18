import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AuthContext from "../../contexts/auth";

export default function Settings(props) {
  const { user } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);
  const [person, setPerson] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false)

  function handleSignOut() {
    setModalVisible(!modalVisible)
    signOut();
  }

  const deleteUser = async (deleteId) => {
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-type': 'aplication/json' }
    }
    try {
      console.log(deleteId)
      await fetch('http://localhost:3000/users/' + deleteId, requestOptions)
      setPerson(person.filter(person => person.idPerson != deleteId))
      setModalVisible(!modalVisible)
    
    } catch (error) {
      console.log("Erro: " + error)
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
          <Image
            source={require('../../../../assets/circle2.png')}
            style={styles.profileIcon}/>

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

          <View>
            <TouchableOpacity
              onPress={() => { props.navigation.navigate('DeleteWorker') }}
              style={styles.button}>
              <Icon style={styles.icon} name='backspace' size={20} color='#3f4040' />
              <Text style={styles.editText}>Cancelar anúncio de serviço</Text>
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

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalDelete}
            onRequestClose={() => {
              setModalDelete(!modalDelete);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Sua conta foi excluída.</Text>
                <Pressable
                  style={[styles.buttonModal, styles.buttonClose]}
                  onPress={() => {deleteUser(user.idperson)}}
                >
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <View>
            <TouchableOpacity style={styles.button}
              onPress={() => setModalDelete(!modalVisible)}>
              <Icon style={styles.icon} name='trash-alt' size={19} color='#b52d2d' />
              <Text style={styles.deleteText}>Excluir conta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Você saiu da sua conta</Text>
                <Pressable
                  style={[styles.buttonModal, styles.buttonClose]}
                  onPress={handleSignOut}
                >
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.buttonExit}
            onPress={() => setModalVisible(!modalVisible)}>
            <Icon style={styles.icon} name='sign-out-alt' size={20} color='#fff' />
            <Text style={styles.exitText}>Sair</Text>
          </TouchableOpacity>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}