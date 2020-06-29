import React,{ useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Api from '../../service/api';
import Styles from './style';

function Search(){
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const [filtered, setFiltered] = useState([]);
    const filteredArray = [];

    useEffect(() => {
        Api.post('search/search.php')
            .then(response => response)
            .then(resJson => setData(resJson.data));

    }, [data]);

    function renderItems(item){
        const items = item.item;

        return (
            <View style={Styles.dataContainer}>
                <View style={Styles.content}>
                    <Text style={Styles.tagText}>Restaurante: </Text>
                    <Text style={Styles.contentText}>
                        { (items.name !== '') ? items.name : '' }
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigateToDetail(items)}>
                        <View
                            style={Styles.detail}>
                            <Feather name="arrow-right" size={24} color="#000" />
                            <Text>Mais detalhes</Text>
                        </View>   
                </TouchableOpacity>
            </View>
        )
    }

    function filterItems(){
        data.map(
            data => {
                if(data.address.indexOf(filter.toLowerCase()) >= 0){
                    filteredArray.push(data);
                }

                return ''
            }
        );

        setFiltered(filteredArray);
    }

    function navigateToDetail(item){
        navigation.navigate('Detail', { item });
    }

    return(
        <View style={Styles.container}>
            <View 
                style={Styles.action}>
                <TextInput 
                    placeholder={'Onde buscar?'}
                    onChangeText={text => setFilter(text)}
                    value={filter}
                    style={Styles.input} />

                <TouchableOpacity
                    onPress={filterItems}
                    style={Styles.btnSearch}>
                    <Text
                        style={{color: '#ffffff'}}>
                        BUSCAR
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={ (filtered.length === 0) ? data : filtered}
                style={Styles.list}
                renderItem={(item) => renderItems(item)}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

export default Search;