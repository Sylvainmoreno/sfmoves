import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const sfx = require('../assets/sfx.png')

class Main extends Component {
    state = { title: '' }

    onpress = async() => {
        await this.setState({ title: 'Super Street Fighter IIX' })
        await this.props.navigation.navigate("Charassfx", { title: this.state.title })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Choose your game:</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <TouchableOpacity onPress={this.onpress}>
                        <Image source={sfx} style={styles.image2} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image2: {
        width: 150,
        height: 100,
        resizeMode: 'contain'
    },
    text: {
        justifyContent: 'flex-start',
    }
})


export default Main;