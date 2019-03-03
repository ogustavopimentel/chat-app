import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Label, Button, Text } from 'native-base'

export default class CreateAccount extends Component {
    render() {
        return(
            <View>
                <Form>
                    <Item fixedLabel>
                        <Label>E-mail</Label>
                        <Input />
                    </Item>
                    <Item fixedLabel last>
                        <Label>Senha</Label>
                        <Input />
                    </Item>
                    <Button 
                        primary
                        style={styles.button}
                    ><Text> Registrar </Text></Button>
                </Form>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text>Voltar para tela Login</Text>
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