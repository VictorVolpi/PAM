import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useState} from "react";
export default function App() {
const [impressao, setImpressao]=useState("");
const [img, setImg]=useState(0);
const frases=[
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Todas as coisas são difíceis antes de se tornarem fáceis.',
  'Você é do tamanho do seu sonho.',
  'Realize o óbvio, pense no improvável e conquiste o impossível',
  'Você sempre será a sua melhor companhia!',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',

];
function quebrar(){
  if (img==0){
    let numAleatorio=Math.floor(Math.random()*frases.length);
    setImpressao(frases[numAleatorio])
    setImg(1)
  }
}
function novo(){
  setImpressao(frases[''])
  setImg(0)
}
function exibirImagem(numero){
  if (numero==0){
    return(<Image source={require('./assets/BiscoitoFechado.jpg')}style={styles.img}/>)
  }else{
    return(<Image source={require('./assets/BiscoitoQuebrado.jpg')}style={styles.img}/>)
  }
}
  return (
    <View style={styles.container}>
      <View style={styles.contImg}>
        {exibirImagem(img)}   
      </View>
      <View style={styles.contTxtSorte}>
        <Text style={styles.txtSorte}>{impressao}</Text>
      </View>
      <View style={styles.contBotao}>
      <TouchableOpacity style={styles.botao}onPress={()=>quebrar()}>
        <View style={styles.formBotao}>
          <Text style={styles.txtBotao}>Abrir o Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}onPress={()=>novo()}>
        <View style={styles.formBotao}>
          <Text style={styles.txtBotao}>Novo Biscoito</Text>
        </View>
      </TouchableOpacity>
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
  },
  img:{
    height:250,
    width:250,
  },
  txtSorte:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center',
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25,
    margin:10,
  },
  formBotao:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  txtBotao:{
    color:'#dd7b22',
    fontSize:18,
    fontWeight:'bold',
  },
  contImg:{
    flex:2,
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
  },
  contTxtSorte:{
    flex:1,
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
  },
  contBotao:{
    flex:1,
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
  },
});
