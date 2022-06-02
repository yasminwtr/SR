import React from 'react'
import {View, TextInput, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from '../styles/servicecategory'

export const Service=()=>{
    return(
        <View style={style.container1}>
            <View style={style.container2}>
              <View style={style.viewdoinput}>
                  <TextInput style={style.input}
                    placeholder='Buscar categoria'
                    placeholderTextColor='black'/>
              </View>

                <Text
                  style={style.text}>
                    Serviços
                </Text>
            </View>

            <View style={style.container3}>
              
              <View style={style.container4}>

                <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/diarista.png')} style={style.imagem1}/>
                  <Text style={style.legenda}>Diarista</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/manicure.png')} style={style.imagem2}/>
                  <Text style={style.legenda}>Manicure</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>  
                <View>
                  <Image source={require('../../assets/costureira.png')} style={style.imagem3}/>
                  <Text style={style.legenda}>Costureira</Text>
                </View>
                </TouchableOpacity>
                  
                <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/maridodealuguel.png')} style={style.imagem4}/>
                  <Text style={style.legenda}>Marido de aluguel</Text>
                </View>
                </TouchableOpacity>

              </View>

              <View style={style.container5}>

              <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/eletricista.png')} style={style.imagem5}/>
                  <Text style={style.legenda}>Eletricista</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/maquiadora.png')} style={style.imagem6}/>
                  <Text style={style.legenda}>Maquiadora</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/pintor.png')} style={style.imagem7}/>
                  <Text style={style.legenda}>Pintor</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View>
                  <Image source={require('../../assets/jardineiro.png')} style={style.imagem8}/>
                  <Text style={style.legenda}>Jardineiro</Text>
                </View>
                </TouchableOpacity>

            </View>

          </View>

      </View>
)
}

export default Service