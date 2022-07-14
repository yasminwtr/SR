import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, Linking, ImageBackground } from 'react-native';
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native';
import AuthContext from "../../contexts/auth";
import * as ImagePicker from 'expo-image-picker'
import api from '../../../api/index'

const Profile = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const route = useRoute()

  const name = route.params?.name
  const email = route.params?.email
  const phonenumber = route.params?.phonenumber
  const price = route.params?.price
  const localization = route.params?.localization
  const whatsapp = route.params?.whatsapp
  const description = route.params?.description

  // photo function
  // const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  // const [photo, setPhoto] = useState('https://64.media.tumblr.com/473151094beb750c93d18f2243d52975/7653ca59a6c472a1-cc/s640x960/0bac061a8e6f2051c218152d6e887bdfea2b1371.jpg')

  // useEffect(() => {
  //   (async () => {
  //     const galleryStatus = ImagePicker.requestMediaLibraryPermissionsAsync
  //     setHasGalleryPermission(galleryStatus.status === 'granted')
  //   })()
  // }, [])

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     cropping: true,
  //     aspect: [4, 3],
  //     quality: 1
  //   })

  //   console.log(result);

  //   if(!result.cancelled){
  //     updatePhoto()
  //   }
  // }

  // const updatePhoto = async () => {
  //   const idPerson = user.idperson;
  //   try {
  //     const response = await api.put(`/users/${idPerson}`, { photo })
  //     const data = response;
  //     console.log('updateUserPhoto', data);

  //     user.photo = data.photo;
  //     setPhoto(photo)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.container}>

        {/* <TouchableOpacity onPress={() => pickImage()}>
          <View style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100
          }}>

            <ImageBackground
            source={{
              uri: photo
            }}
            style={{height: 100, width: 100}}
            imageStyle={{borderRadius: 100}}
            >
              <View>
                <Icon name='camera' size={20} color='#fff' style={{
                  opacity: 0.7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center'
                }}/>
              </View>
            </ImageBackground>

          </View>
        </TouchableOpacity> */}

        <Image source={require('../../../../assets/circle.png')}
            style={styles.profileIcon} />

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.service}>Diarista</Text>

          { route.params ? (
            <>
             <TouchableOpacity style={styles.button}
             onPress={() => {Linking.openURL(`${whatsapp}`)}}>
              <Text style={styles.buttonText}>WhatsApp</Text>
             </TouchableOpacity>
            </>
          ) : (
            <>
             <TouchableOpacity style={styles.button}
             onPress={() => {navigation.navigate('NavigationBar')}}>
              <Text style={styles.buttonText}>Conferir link</Text>
             </TouchableOpacity>
            </>
          )
          }

        </View>

        { route.params ? (
            <>
            <View style={styles.containerContact}>
              <View style={styles.viewContact}>
                <Icon name='envelope-open-text' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Email</Text>
              </View>
              <Text style={styles.textContact}>{email}</Text>

              <View style={styles.viewContact}>
                <Icon name='phone-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Telefone</Text>
              </View>
              <Text style={styles.textContact}>{phonenumber}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Preço médio dos serviços</Text>
              </View>
              <Text style={styles.textContact}>R$ {price}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Localização</Text>
              </View>
              <Text style={styles.textContact}>{localization}</Text>

              <View style={styles.viewContact}>
                <Icon name='th-list' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Descrição</Text>
              </View>
              <Text style={styles.textContact}>{description}</Text>
            </View>
            </>
          ) : (
            <>
            <View style={styles.containerContact}>
              <View style={styles.viewContact}>
                <Icon name='envelope-open-text' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Email</Text>
              </View>
              <Text style={styles.textContact}>{user?.email}</Text>

              <View style={styles.viewContact}>
                <Icon name='phone-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Telefone</Text>
              </View>
              <Text style={styles.textContact}>{user?.phonenumber}</Text>

              <View style={styles.viewContact}>
                <Icon name='map-marked-alt' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Localização</Text>
              </View>
              <Text style={styles.textContact}>Ingleses do Rio Vermelho, Florianópolis, SC</Text>

              <View style={styles.viewContact}>
                <Icon name='th-list' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Descrição</Text>
              </View>
              <Text style={styles.textContact}>Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, higienização e organização de todos os cômodos. Limpeza, umapa.</Text>
            </View>
            </>
          )
          }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile