import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaCapa(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de início</Text>
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
      <Text>Essa é a tela de "esqueci a senha"</Text>
      <Button title="Tela escolhas" onPress={()=>{
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
        navigation.navigate ('Ver Autores')
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
        navigation.navigate ('Poesias Rupi Kaur')
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
        navigation.navigate ('Ler essa poesia')
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
      <Button title="Pablo Neruda, Cem Sonetos de Amor..." onPress={()=>{
        navigation.navigate ('Leia Pablo Neruda')
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
      <Button title="Poesias do momento" onPress={()=>{
        navigation.navigate ('Conheça as poesias do momento')
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
        navigation.navigate ('Leia Cecília Meireles')
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
        navigation.navigate ('Postar poesias')
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
        navigation.navigate ('Visualizar seu perfil')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPerfil(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela do seu perfil</Text>
      <Button title="Voltar" onPress={()=>{
        navigation.navigate ('Escolhas')
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
        <Stack.Screen name="Capa" component={TelaCapa} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Esqueceu Senha" component={TelaEsqueceuSenha} />
        <Stack.Screen name="Principal" component={TelaPrincipal} />
        <Stack.Screen name="Escolhas" component={TelaEscolhas} />
        <Stack.Screen name="Autores Segue" component={TelaAutoresSegue} />
        <Stack.Screen name="Segunda tela Autores segue" component={TelaAutoresSegue1} />
        <Stack.Screen name="Autores que conhece" component={TelaConheca} />
        <Stack.Screen name="Segunda tela Autores que conhece" component= {TelaConheca1} />
        <Stack.Screen name="Poesias do Momento" component={TelaPoesiaMomento} />
        <Stack.Screen name="Favoritos" component={TelaFvoritos} />
        <Stack.Screen name="Criar Agora" component={TelaCriarAgora} />
        <Stack.Screen name="Segunda tela Criar Agora" component={TelaCriarAgora1} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
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