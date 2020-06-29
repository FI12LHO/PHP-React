import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Styles from './style';

function Home(){
    const navigation = useNavigation();
    
    return(
        <View style={Styles.container}>
            <Text style={Styles.logo}>EatWell</Text>

            <View style={Styles.sloganContainer}>
                <Text 
                    style={Styles.slogan}>
                        Procurando um restaurante?
                </Text>
                <Text 
                    style={Styles.slogan, {fontSize: 14, fontWeight: 'bold'}}>
                        Um maneira facil de encotrar um.
                </Text>
            </View>
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('Search')} 
                style={Styles.btn}>
                <Text
                    style={{color: '#ffffff', fontSize: 14}}>
                    PROCURAR RESTAURANTE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;