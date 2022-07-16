import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, Linking, ImageBackground, FlatList } from 'react-native';
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native';
import AuthContext from "../../contexts/auth";
import api from '../../../api/index'

const Profile = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const route = useRoute()

  const name = route.params?.name
  const email = route.params?.email
  const phonenumber = route.params?.phonenumber
  const price = route.params?.price
  const localization = route.params?.localization
  const city = route.params?.city
  const whatsapp = route.params?.whatsapp
  const description = route.params?.description
  const titleService = route.params?.titleService

  const [userServices, setUserServices] = useState([])

  async function getServices(idperson) {
    try {
      const response = await api.get(`/getServicesFromUser/${idperson}`);
      return setUserServices(response.data)
    } catch (error) {
      setUserServices([])
    }
  }
  
  useEffect(() => {
    getServices(user.idperson)
  }, [])

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.container}>
          {route.params ? (
            <>
              <ImageBackground
                source={'https://64.media.tumblr.com/35f8d891314ddb3e5d0b6eb57c6dad90/tumblr_p05g8ldYED1sbghg6o6_250.jpg'}
                style={styles.profileIcon}
                imageStyle={{borderRadius: 100}}>
              </ImageBackground>
            </>
          ) : (
            <>
              <ImageBackground
                source={'https://64.media.tumblr.com/90efb16d9f78769f5c4578cb8fd21dfb/2f8fbfc24ba6a2ca-bb/s400x600/ae1dab3b316b369b1d9a3abd34691a1cfea3edd3.pnj'}
                style={styles.profileIcon}
                imageStyle={{borderRadius: 100}}>
              </ImageBackground>
            </>
          )
          }

          <Text style={styles.name}>{name ? name : user.fullname}</Text>

          {route.params ? (
            <>
              <Text style={styles.service}>{titleService}</Text>
              <TouchableOpacity style={styles.button}
                onPress={() => { Linking.openURL(`${whatsapp}`) }}>
                <Text style={styles.buttonText}>WhatsApp</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('EditProfile') }}>
                <Text style={styles.buttonText}>Editar conta</Text>
              </TouchableOpacity>
            </>
          )
          }

        </View>

        {route.params ? (
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
              <Text style={styles.textContact}>{city}, {localization}</Text>

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
                <Icon name='thumbtack' size={17} color='#3f4040' />
                <Text style={styles.titleContact}>Serviços anunciados</Text>
              </View>

              <FlatList
                data={userServices}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity style={styles.textContact}
                        onPress={() => {
                          console.log('item', item);
                          navigation.navigate('Profile2',
                            {
                              workerId: `${item.idperson}`, name: `${item.fullname}`, email: `${item.email}`, phonenumber: `${item.phonenumber}`,
                              price: `${item.priceservice}`, localization: `${item.localization}`, whatsapp: `${item.whatsapp}`, description: `${item.descriptionservice}`,
                              titleService: `${item.titleservice}`, city: `${item.city}`
                            })
                        }
                        }>
                        <Text style={styles.textContact}>{item.titleservice}</Text>
                      </TouchableOpacity>

                    </View>
                  )
                }}
              />
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
            </View>
          </>
        )
        }
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}

export default Profile

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