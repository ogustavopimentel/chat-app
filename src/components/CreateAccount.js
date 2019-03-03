import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Label, Button, Text } from 'native-base'
import firebase from '@firebase/app'
import '@firebase/auth'

export default class CreateAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    tryRegister() {
        const { name, email, password } = this.state
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function() {
                let user = firebase.auth().currentUser
                user.updateProfile({ displayName: name })
            })
    }

    render() {
        return(
            <View>
                <Form>
                    <Item fixedLabel>
                        <Label>Nome</Label>
                        <Input 
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </Item>
                    <Item fixedLabel>
                        <Label>E-mail</Label>
                        <Input 
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>
                    <Item fixedLabel last>
                        <Label>Senha</Label>
                        <Input 
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </Item>
                    <Button 
                        primary
                        style={styles.button}
                        onPress={() => this.tryRegister()}
                    ><Text> Registrar </Text></Button>
                </Form>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text>Voltar para tela de login</Text>
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