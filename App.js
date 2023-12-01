import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Aqui você faz seu cadastro</Text>
      <Button title="Cadastrar" onPress={()=>{
        navigation.navigate ('Cadastro')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Aqui você faz seu cadastro</Text>
      <Button title="Esqueci minha senha" onPress={()=>{
        navigation.navigate ('Esqueci minha senha')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaEsqueceuSenha(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de esqueci a senha</Text>
      <Button title="Escolhas" onPress={()=>{
        navigation.navigate ('Escolhas')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaEscolhas(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela principal para escolhas</Text>
      <Button title="Autores que você segue" onPress={()=>{
        navigation.navigate ('Autores que você segue')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaAutoresSegue(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de autores que você segue</Text>
      <Button title="Rupi Kaur" onPress={()=>{
        navigation.navigate ('Rupi Kaur')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaAutoresSegue1(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Esses são os exemplos de poesias da Rupi Kaur</Text>
      <Button title="acima de tudo ame" onPress={()=>{
        navigation.navigate ('Conheça')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaConheca(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela para conhecer novos autores</Text>
      <Button title="Pablo Neruda" onPress={()=>{
        navigation.navigate ('Pablo Neruda')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaConheca1(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela da poesia de Pablo Neruda</Text>
      <Button title="Pablo Neruda, Cem Sonetos de Amor..." onPress={()=>{
        navigation.navigate ('Poesias do momento')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPoesiaMomento(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de poesias do momento</Text>
      <Button title="Cecília Meireles: Lua adversa" onPress={()=>{
        navigation.navigate ('Cecília Meireles')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaFavoritos(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de poesias favoritadas</Text>
      <Button title="Criar Agora" onPress={()=>{
        navigation.navigate ('Criar Agora')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCriarAgora(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela para criar um perfil de poeta </Text>
      <Button title="Avançar" onPress={()=>{
        navigation.navigate ('Avançar para postar')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCriarAgora1(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela para postar sua poesias </Text>
      <Button title="Perfil" onPress={()=>{
        navigation.navigate ('Inicio')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Esqueci minha senha" component={TelaEsqueceuSenha} />
        <Stack.Screen name="Escolhas" component={TelaEscolhas} />
        <Stack.Screen name="Autores que você segue" component={TelaAutoresSegue} />
        <Stack.Screen name="Rupi Kaur" component={TelaAutoresSegue1} />
        <Stack.Screen name="Conheça" component={TelaConheca} />
        <Stack.Screen name="Pablo Neruda" component= {TelaConheca1} />
        <Stack.Screen name="Poesias do momento" component={TelaPoesiaMomento} />
        <Stack.Screen name="Cecília Meireles" component={TelaFavoritos} />
        <Stack.Screen name="Criar Agora" component={TelaCriarAgora} />
        <Stack.Screen name="Avançar para postar" component={TelaCriarAgora1} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});