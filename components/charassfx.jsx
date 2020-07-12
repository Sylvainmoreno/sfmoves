import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import ryu from '../assets/ryu.gif';
import ken from '../assets/ken.gif';
import chun from '../assets/chun.gif';
import left from '../assets/left.webp';
import right from '../assets/right.png';
import down from '../assets/down.webp';
import up from '../assets/up.webp';
import diagright from '../assets/diagright.webp'
import holdb from '../assets/Holdb.webp';
import holddu from '../assets/holddu.webp';
import rl from '../assets/rl.png'
import hado from '../assets/hado.webp';
import hado2 from '../assets/hado2.webp';
import rhado from '../assets/rhado.png';
import demihado from '../assets/demihado.png';
import demi from '../assets/demi.webp';
import shoryu from '../assets/shoryu.webp';
import air from '../assets/air.webp';
import tap from '../assets/tap.webp';
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
            <View style={{ flex: 1 }}>
                <Swiper showsPagination={false} onIndexChanged={(index) => this.setCurrentSlide(index)}>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginBottom: 100 }}>
                            {/*ryu moves begins here */}
                            <View style={styles.container}>
                                <Text style={styles.text}>RYU</Text>
                                <View style={{ height: 330 }}>
                                    <Image source={ryu} style={styles.image} />
                                </View>
                                <View style={{ flexDirection: 'column', marginTop: 40, width: '98%' }}>
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
                        </ScrollView>
                    </View>
                    {/*Ryu moves ends here */}

                    {/*Ken moves begins here */}
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginBottom: 100 }}>
                            <View style={styles.container}>
                                <Text style={styles.text}>KEN</Text>
                                <View style={{ height: 330 }}>
                                    <Image source={ken} style={styles.image} />
                                </View>
                                <View style={{ flexDirection: 'column', marginTop: 40, width: '98%' }}>
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
                        </ScrollView>
                    </View>
                    {/*Ken moves ends here */}


                    {/*Chun-li moves begins here */}
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginBottom: 100 }}>
                            <View style={styles.container}>
                                <Text style={styles.text}>CHUN-LI</Text>
                                <View style={{ height: 330 }}>
                                    <Image source={chun} style={styles.image} />
                                </View>
                                <View style={{ flexDirection: 'column', marginTop: 40, width: '98%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Koshû Tô</Text>
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
                                            <Text>Ryûsei Raku</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={air} />
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
                                            <Text>Kôhô Kaiten Kyaku</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={diagright} />
                                            <Text>+</Text>
                                            <Image source={mk} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Kaku Kyaku Raku</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={diagright} />
                                            <Text>+</Text>
                                            <Image source={hk} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Yôsô Kyaku</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={air} />
                                            <Image source={down} />
                                            <Text>+</Text>
                                            <Image source={mk} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Kikôken</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={holdb} />
                                            <Image source={right} />
                                            <Text>+</Text>
                                            <Image source={ap} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Spinning Bird Kick</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={holdb} />
                                            <Image source={right} />
                                            <Text>+</Text>
                                            <Image source={ak} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Kûchû Spinning Bird Kick</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={air} />
                                            <Image source={holdb} />
                                            <Image source={right} />
                                            <Text>+</Text>
                                            <Image source={ak} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Tenshô Kyaku</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={holddu} />
                                            <Text>+</Text>
                                            <Image source={ak} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Hyakuretsu Kyaku</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={tap} />
                                            <Text>+</Text>
                                            <Image source={ak} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.board}>
                                            <Text>Senretsu Kyaku</Text>
                                        </View>
                                        <View style={styles.board}>
                                            <Image source={holdb} />
                                            <Image source={rl} />
                                            <Image source={right} />
                                            <Text>+</Text>
                                            <Image source={ak} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    {/*Chun-li moves ends here */}
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
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
        //flex: 1,
        // marginBottom: -75,
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    image: {
        resizeMode: 'contain'
    }
})


export default Charassfx;

