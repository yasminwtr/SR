import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../styles/login'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Mensagem = (props) => {
return(
    <View style={styles.container}>
        <Text
        style={styles.title}>
            {props.title}
        </Text>

        <Text
        style={styles.titleInput}>
            E-mail
        </Text>

        <Icon
        name='user'
        style={{color:'#563d7d',
        paddingRight:'65%',
        position:'absolute',
        left:75,
        top:'51%'
        }} 
        />
        <TextInput
        style={styles.textInput}
        placeholder='email@email.com'
        keyboardType='email-address'
        >
        </TextInput>
        
        <Icon
        name='lock'
        style={{color:'#563d7d',
        paddingRight:'90%',
        position:'absolute',
        left:75,
        top:'71%'
        }}
        />
        <Text
        style={styles.titleInput}>

            Senha
        </Text>
        <TextInput

        style={styles.textInput}
            placeholder='********'
        >
            
        </TextInput>

        <TouchableOpacity
        style={styles.button}
        >
            <Text
                style={{color:'white', textAlign:'center'}}>
                Entrar
            </Text>
        </TouchableOpacity>

        <Text>
            Não possui uma conta?
            <Text style={{color:'#563d7d'}}>
             Cadastrar
            </Text>
        </Text>
    </View>
)
}

export default Mensagem