import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image source={require('./assets/download.png')} style={{width: 500, height: 500}} />
      <Text style = {{fontFamily: "arvo", fontSize: 35}}
      >Seja Bem-Vindo ao Poesia...Pois, é Poesia...</Text>
      <Pressable style={styles.button} onPress={() => {
        navigation.navigate('Cadastro')
      }}>
      <Text style = {{fontFamily: "roboto", fontSize: 25, textAlign: 'center'}}>Cadastro</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => {
        navigation.navigate('Login')
      }}>
      <Text style = {{fontFamily: "roboto", fontSize: 25, textAlign: 'center'}}>Login</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>É novo por aqui? Cadastre-se!</Text>
      <TextInput
        placeholder="Nome"
        keyboardType="name"
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={() => {
        navigation.navigate('Login')
      }}>
        <Text>Login</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => {
        navigation.navigate('Esqueci Senha')
      }}>
        <Text>Esqueci Senha</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Faça login</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="name"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Logar-se" onPress={() => {
        navigation.navigate('Escolhas')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaEsqueceuSenha() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Nova senha</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="name"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Escolhas" onPress={() => {
        navigation.navigate('Escolhas')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaEscolhas() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela principal para escolhas</Text>
      <Button title="Autores que você segue" onPress={() => {
        navigation.navigate('Autores que você segue')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaAutoresSegue() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de autores que você segue</Text>
      <Button title="Rupi Kaur" onPress={() => {
        navigation.navigate('Rupi Kaur')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaAutoresSegue1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Esses são os exemplos de poesias da Rupi Kaur</Text>
      <Button title="acima de tudo ame" onPress={() => {
        navigation.navigate('Conheça')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaConheca() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela para conhecer novos autores</Text>
      <Button title="Pablo Neruda" onPress={() => {
        navigation.navigate('Pablo Neruda')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaConheca1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela da poesia de Pablo Neruda</Text>
      <Button title="Pablo Neruda, Cem Sonetos de Amor..." onPress={() => {
        navigation.navigate('Poesias do momento')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPoesiaMomento() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de poesias do momento</Text>
      <Button title="Cecília Meireles: Lua adversa" onPress={() => {
        navigation.navigate('Cecília Meireles')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaFavoritos() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de poesias favoritadas</Text>
      <Button title="Criar Agora" onPress={() => {
        navigation.navigate('Criar Agora')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCriarAgora() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela para criar um perfil de poeta </Text>
      <Button title="Avançar" onPress={() => {
        navigation.navigate('Avançar para postar')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCriarAgora1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela para postar sua poesias </Text>
      <Button title="Perfil" onPress={() => {
        navigation.navigate('Inicio')
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
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Esqueci Senha" component={TelaEsqueceuSenha} />
        <Stack.Screen name="Escolhas" component={TelaEscolhas} />
        <Stack.Screen name="Autores que você segue" component={TelaAutoresSegue} />
        <Stack.Screen name="Rupi Kaur" component={TelaAutoresSegue1} />
        <Stack.Screen name="Conheça" component={TelaConheca} />
        <Stack.Screen name="Pablo Neruda" component={TelaConheca1} />
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
    backgroundColor: '#EDDACF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    frontFamilly: "Arial"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#BB8B76',
    margin: 15,
    padding: 10,
    height: 40,
    width: 150,
    borderRadius: 6,
    justifyContent: "center",
  }
});