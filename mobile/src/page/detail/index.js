import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Styles from './style';

function Detail(){
    const route = useRoute();
    const data = route.params.item
    
    return(
        <View style={Styles.container}>
            <View style={Styles.tag}>
                <Text style={Styles.tagText}>Restaurante: </Text>
                <Text style={Styles.tagText}>Proprietario: </Text>
                <Text style={Styles.tagText}>Funcionamento: </Text>
                <Text style={Styles.tagText}>Contato: </Text>
                <Text style={Styles.tagText}>Endereço: </Text>
                <Text style={Styles.tagText}>CEP: </Text>
                <Text style={Styles.tagText}>Entrega: </Text>
            </View>
            
            <View style={Styles.content}>
                <Text style={Styles.contentText}>
                    { (data.name !== '') ? data.name : '' }
                </Text>
                <Text style={Styles.contentText}>
                    { (data.owner !== '') ? data.owner : '' }
                </Text>
                <Text style={Styles.contentText}>
                    { (data.opening !== '') ? data.opening : '' }
                </Text>
                <Text style={Styles.contentText}>
                    { (data.contact !== '') ? data.contact : '' }
                </Text>
                <Text style={Styles.contentText}>
                    { (data.address !== '') ? data.address : '' }
                </Text>
                <Text style={Styles.contentText}>
                    { (data.cep !== '') ? data.cep : '' }
                </Text>
                <Text style={Styles.contentText}>
                    { (data.delivery !== false) ? 'Sim' : 'Não' }
                </Text>
            </View>
        </View>
    )
}

export default Detail;