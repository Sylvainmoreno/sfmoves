import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Constants from 'expo-constants';
import ryu from '../assets/ryu.gif';
import ken from '../assets/ken.gif';
import chun from '../assets/chun.gif';
import left from '../assets/left.webp';
import right from '../assets/right.png';
import hado from '../assets/hado.webp';
import hado2 from '../assets/hado2.webp';
import rhado from '../assets/rhado.png';
import demihado from '../assets/demihado.png';
import demi from '../assets/demi.webp';
import shoryu from '../assets/shoryu.webp';
import air from '../assets/air.webp';
import lp from '../assets/lp.webp';
import mp from '../assets/mp.webp';
import hp from '../assets/hp.webp';
import lk from '../assets/lk.webp';
import mk from '../assets/mk.webp';
import hk from '../assets/hk.webp';
import ap from '../assets/allpunch.png';
import ak from '../assets/allkick.png';


class Charassfx extends React.Component {

    state = {
        index: 0
    }

    setCurrentSlide = (index) => {
        this.setState({
            currentSlide: index
        });
    };


    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).title
    })


    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Swiper showsPagination={false} onIndexChanged={(index) => this.setCurrentSlide(index)}>

                    <View style={styles.container}>
                        <Text style={styles.text}>RYU</Text>
                        <Image source={ryu} style={styles.image} />
                        <View style={{ flex: 2, flexDirection: 'column', marginTop: 40, width: '98%' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Seoi Nage</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={left} />
                                    <Text>or</Text>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={mp} />
                                    <Text>or</Text>
                                    <Image source={hp} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Tomoe Nage</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={left} />
                                    <Text>or</Text>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={mk} />
                                    <Text>or</Text>
                                    <Image source={hk} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Mid-air Uppercut</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={air} />
                                    <Text>+</Text>
                                    <Image source={mp} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Sakotsu Wari</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={mp} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Mizôchi Kudaki</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={hp} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Hadoken</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={hado} />
                                    <Text>+</Text>
                                    <Image source={ap} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Shakunetsu Hadoken</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={demi} />
                                    <Text>+</Text>
                                    <Image source={ap} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Shôryuken</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={shoryu} />
                                    <Text>+</Text>
                                    <Image source={ap} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Tatsumaki-Senpukyaku</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={hado2} />
                                    <Text>+</Text>
                                    <Image source={ak} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Kuchû Tatsumaki</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={air} />
                                    <Text>+</Text>
                                    <Image source={hado2} />
                                    <Text>+</Text>
                                    <Image source={ak} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Shinkû Hadoken</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={hado} />
                                    <Image source={hado} />
                                    <Text>+</Text>
                                    <Image source={ap} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.text}>KEN</Text>
                        <Image source={ken} style={styles.image} />
                        <View style={{ flex: 2, flexDirection: 'column', marginTop: 40, width: '98%' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Seoi Nage</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={left} />
                                    <Text>or</Text>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={mp} />
                                    <Text>or</Text>
                                    <Image source={hp} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Tsukami Nage</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={left} />
                                    <Text>or</Text>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={mk} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Jigoku Guruma</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={left} />
                                    <Text>or</Text>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={hk} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Jigoku Fûsha</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={air} />
                                    <Image source={left} />
                                    <Text>or</Text>
                                    <Image source={right} />
                                    <Text>+</Text>
                                    <Image source={mk} />
                                    <Text>or</Text>
                                    <Image source={hk} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Hadoken</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={hado} />
                                    <Text>+</Text>
                                    <Image source={ap} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Shôryuken</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={shoryu} />
                                    <Text>+</Text>
                                    <Image source={ap} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Tatsumaki-Senpukyaku</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={hado2} />
                                    <Text>+</Text>
                                    <Image source={ak} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Kuchû Tatsumaki</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={air} />
                                    <Text>+</Text>
                                    <Image source={hado2} />
                                    <Text>+</Text>
                                    <Image source={ak} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Kama Barai Geri</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={hado} />
                                    <Text>+</Text>
                                    <Image source={ak} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Nata Otoshi Geri</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={rhado} />
                                    <Text>+</Text>
                                    <Image source={ak} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Oosoto Mawashi Geri</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={demi} />
                                    <Text>+</Text>
                                    <Image source={ak} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Inazuma Kakato Wari</Text>
                                </View>
                                <View style={styles.board}>
                                    <Text>HOLD</Text>
                                    <Text>+</Text>
                                    <Image source={ak} /><Text>during geri</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.board}>
                                    <Text>Shoryu Reppa</Text>
                                </View>
                                <View style={styles.board}>
                                    <Image source={hado} />
                                    <Image source={demihado} />
                                    <Text>+</Text>
                                    <Image source={ap} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text>CHUN</Text>
                        <Image source={chun} />
                    </View>

                </Swiper>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    board: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 7,
        paddingTop: 7
    },
    text: {
        flex: 1,
        marginTop: 50,
        marginBottom: -75
    },
    image: {
        flex: 1,
        height: 50,
        width: 100,
    },
    // scrollView: {
    //     height: 500
    // }
})


export default Charassfx;

