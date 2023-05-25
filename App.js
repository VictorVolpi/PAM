import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CheckBox, Picker, Switch, TextInput } from 'react-native-web';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function App() {
  const [isSelected, setSelection] = useState(false);
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [endereco, setEndereco] = useState();
  const [email, setEmail] = useState();
  const [exibir,  setExibir] = useState("oi");



  const exibirNome = () =>  {
      setExibir ([nome]);
  }
      
  return (
    <View style={styles.container}>
      <View style={styles.fotoUsu}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50, borderWidth: 2}}
          source={require("./assets/neymar.jpg")}
          />
      </View>
      <View style={styles.borda}>
        <Text style={styles.text}>Dados Pessoais</Text>
        <TextInput 
          placeholder="Digite Seu Nome"
          style={styles.input}
          onChangeText = {(text) => setNome(text)}
        />
        <TextInput 
          placeholder="Digite Seu Telefone"
          style={styles.input}
          onChangeText = {(text) => setTelefone(text)}
        />
        <TextInput 
          placeholder="Digite Seu Endereço"
          style={styles.input}
          onChangeText = {(text) => setEndereco(text)}
        />
        <TextInput  
          placeholder="Digite Seu Email"
          style={styles.input}
          onChangeText = {(text) => setEmail(text)}
        />
      </View>
      <View style={styles.borda}>
        <Text style={styles.text}>Outras Informações</Text>        
        <Picker
         
          style={styles.borda} 
           
        >
            <Picker.Item label="Selecione..." value="Selecione"/>
            <Picker.Item label="PHP" value="PHP"/>
            <Picker.Item label='HTML' value='HTML'/>
            <Picker.Item label='Java Script' value='Java Script'/>
            <Picker.Item label='SQL Server' value='SQL Server'/>
            <Picker.Item label='My SQL' value='My SQL'/>
           <Picker.Item label='Java' value='Java'/>

        </Picker>
        <View style={{flexDirection:'row'}}>

<CheckBox
    value={isSelected}
    onValueChange={setSelection}
    style={styles.checkbox}

    />

     
<Text>Deseja receber informações: {isSelected ? '👍' : '👎'}</Text>


</View>
      </View>
        
      <View style={styles.borda}>
        <Text style={styles.text}>Nome:{nome}</Text>
        <Text style={styles.text}>Telefone:{telefone}</Text>
        <Text style={styles.text}>Endereço:{endereco}</Text>
        <Text style={styles.text}>Email:{email}</Text>
        <Text style={styles.text}>Hobby:</Text>
        <Text style={styles.text}>Aceito:</Text>
      </View>

    
      <StatusBar style="auto" />
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  
  fotoUsu: {
    
  },


  borda: {
    borderWidth: 2,
    borderRadius: 5,
    width: '95%',
    padding: '1%',
    margin: '2%',
    backgroundColor: '#FFFFFF',

  },
  
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: '1%',
  },

  input: {
    borderWidth: 1,
    padding: '1%',
    margin: '1%',
    fontSize: 15,
  },



});