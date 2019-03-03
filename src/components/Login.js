import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Label, Button, Text } from 'native-base'
import firebase from '@firebase/app'
import '@firebase/auth'


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyDz5IJs8ZN1D7QMtbEBqvyL2iM0heqyfVU",
            authDomain: "chat-aecb5.firebaseapp.com",
            databaseURL: "https://chat-aecb5.firebaseio.com",
            projectId: "chat-aecb5",
            storageBucket: "chat-aecb5.appspot.com",
            messagingSenderId: "442105171803"
          };
        firebase.initializeApp(config);
    }

    onChangeTextEmail = email => this.setState({ email })
    onChangeTextPassword = password => this.setState({ password })

    tryLogin() {
        const { email, password } = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                console.tron.log('Usuário autenticado!', user)
                this.props.navigation.navigate('Chat', {
                    Email: email,
                })
            })
            .catch(error => {
                console.tron.log('Usuário Não encontrado', error)
            })
    }

    render() {
        return(
            <View>
                <Form>
                    <Item fixedLabel>
                        <Label>E-mail</Label>
                        <Input 
                            value={this.state.email}
                            onChangeText={this.onChangeTextEmail}
                        />
                    </Item>
                    <Item fixedLabel last>
                        <Label>Senha</Label>
                        <Input 
                            value={this.state.password}
                            onChangeText={this.onChangeTextPassword}
                        />
                    </Item>
                    <Button 
                        primary
                        style={styles.button}
                        onPress={() => this.tryLogin()}
                    ><Text> Entrar </Text></Button>
                </Form>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('CreateAccount')}
                >
                    <Text>Registrar uma conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        alignSelf: 'center',
        marginTop: 15
    }
})