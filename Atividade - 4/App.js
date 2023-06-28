import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';

export default function App() {

  const[posição,setPosição] = useState(1)
  const [visibility, setVisibility] = useState(false);
  const[times,setTimes]=useState([
    
    {nome:'CORINTHIANS',
    imagem: require("./assets/corinthians7.png"),
    leitura:'Sport Club Corinthians Paulista é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado de São Paulo. Foi fundado como uma equipe de futebol no dia 1 de setembro de 1910 por um grupo de operários do bairro Bom Retiro.',
    
    estadio:'Estadio : Neo quimica arena',
    },

    {nome:'FLAMENGO',
    imagem:require("./assets/flamengo7.png"),
    leitura:'O Clube de Regatas do Flamengo é uma agremiação poliesportiva brasileira com sede na cidade do Rio de Janeiro, capital do estado homônimo.',
    estadio:'Estadio : Maracanã',
    },
    {nome:'SÃO PAULO',
    imagem:require("./assets/ss.jpg"),
    leitura:'São Paulo Futebol Clube é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 25 de janeiro de 1930, tendo interrompido suas atividades em maio de 1935, e as retomado em dezembro do mesmo ano.',
    estadio:'Estadio : Morumbi',
    },
    {nome:'SANTOS',
    imagem:require("./assets/santos.png"),
    leitura:'O Santos Futebol Clube, mais conhecido como Santos, é um clube poliesportivo brasileiro, com sede em Santos, é considerado um dos maiores clubes da história do futebol mundial.',
    estadio:'Estadio : Vila Belmiro',

    },
    {nome:'PALMEIRAS',
    imagem:require("./assets/palmeiras.jpg"),
    leitura:'Sociedade Esportiva Palmeiras é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 26 de agosto de 1914 e suas cores, presentes no escudo e bandeira oficial, são o verde e branco.',
    estadio:'Estadio : Allianz Parque',

    },
    {nome:'CRUZEIRO',
    imagem:require("./assets/cruzeiro.jpg"),
    leitura:'O Cruzeiro Esporte Clube é uma associação polidesportiva brasileira, com sede em Belo Horizonte, Minas Gerais. É considerado um dos maiores clubes de futebol do Brasil e da América do Sul.',
    estadio:'Estadio : Mineirão',
    
    },
    {nome:'GREMIO',
    imagem:require("./assets/gremio.png"),
    leitura:'O Grêmio Foot-Ball Porto Alegrense é um clube de futebol brasileiro da cidade de Porto Alegre, no Rio Grande do Sul, fundado em 15 de setembro de 1903 por Candido Dias da Silva. É considerado um dos maiores clubes do Brasil e da América do Sul. Suas cores são azul, preto e branco.',
    estadio:'Estadio : Arena do Gremio',
    
    },
    {nome:'BARCELONA',
    imagem:require("./assets/transferir.jpg"),
    leitura:'Futbol Club Barcelona, também conhecido como Barcelona e popularmente como Barça, ou até mesmo Clube Catalão, é um clube de futebol profissional, com sede em Barcelona, na Catalunha, considerado um dos maiores clubes da história do futebol mundial.',
    estadio:'Estadio : Camp Nou',
    
    },
    {nome:'CITY',
    imagem:require("./assets/city.png"),
    leitura:'O Manchester City Football Club, ou simplesmente Manchester City, é um clube de futebol inglês, fundado em 1880 sob o nome de FC St.Marks tornando-se posteriormente Ardwick Association Football Club, e finalmente, no dia 16 de abril de 1894, no seu nome atual.' ,
    estadio:'Estadio : Ethiad Stadium',
    
    },
    {nome:'REAL MADRID',
    imagem: require("./assets/real.png"),
    leitura:'O Real Madrid Club de Fútbol, mais conhecido como Real Madrid ou simplesmente Real, é um clube polidesportivo espanhol, com sede em Madrid, é considerado o maior clube da história do futebol mundial',
    estadio:'Estadio : Santiago Bernabeu',
    
    },
  ]);

  function carregar (p){
    setVisibility(true)
    setPosição(p)

  }



  
  return (
    <View style={styles.container}>
    
      <TouchableOpacity onPress={() => carregar(0)}>
      <Image style={{width:100,height:100,alignItems:'center', justifyContent:'center',marginTop:95,marginLeft:'auto',marginRight:'auto',flex:1,}}
        source = {require("./assets/corinthians7.png")}
      />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => carregar(1)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:50,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/flamengo7.png")}
      />
      
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => carregar(2)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:50,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/ss.jpg")}
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => carregar(3)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:100,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/santos.png")}
      />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => carregar(4)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:100,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/palmeiras.jpg")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => carregar(5)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:100,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/cruzeiro.jpg")}
      />
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress={() => carregar(6)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:100,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/gremio.png")}
      />
      
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => carregar(7)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:100,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/transferir.jpg")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => carregar(8)}>
      <Image style={{width:100,height:100,justifyContent:'center',marginTop:100,marginLeft:'auto',marginRight:'auto',flex:1}}
        source = {require("./assets/city.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => carregar(9)}>
      <Image style={{width:100, height:100, justifyContent:'center', marginTop:100, marginLeft:'auto', marginRight:'auto', flex:1}}
        source = {require("./assets/real.png")}
      />
      
      </TouchableOpacity>
     
    <Modal style = {styles.Modal1}  visible={visibility}  animationType='fade'>
      <View>
        <Text style={styles.nome1}>{times[posição].nome} </Text>
        <Image source={times[posição].imagem} style={styles.img1} />
        <Text style={styles.leitura1}>{times[posição].leitura}</Text>
        <Text style={styles.estadio1}>{times[posição].estadio}</Text>
        <Button style = {styles.Button1} title = "voltar" onPress = {() => setVisibility(false)} />
        <Image source={setTimes}style={styles.img1}/>
        <View style={styles.ModalContainer}/>
        <View style={styles.ModalContent}/>
        
       
      </View>
    </Modal>
    <StatusBar style="auto"/>
     

      
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
  img1: {
      width:200,
      height:200,
      alignItems:'center',
      justifyContent:'center',
      marginTop:100,
      marginRight:'auto',
      marginLeft:'auto',


      
  },
  Modal: {
    backgroundColor:'#deddc4',

  },
  estadio1: {
    alignItems:'center',
      justifyContent:'center',
      marginTop:80,
      marginRight:'auto',
      marginLeft:'auto',
      fontSize:25,
  },
  leitura1: {
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
    marginTop:10,
    fontFamily:'century gothic'

  },
 nome1: {
    alignItems:'center',
    justifyContent:'center',
    fontSize:40,
    marginTop:50,
    marginRight:'auto',
    marginLeft:'auto',




  },
  Modal1: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  useState: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    fontSize:16,
    marginBottom:10,



  },
  ModalContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
   

  },
  Button1: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50,
    height:25,
    width:-20,



   
  },
  ModalContent:{
    backgroundColor:'white',
    padding:20,
    borderRadius:5,
   
  },

});
