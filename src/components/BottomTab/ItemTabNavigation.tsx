import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabStyle } from './styles'

const ItemTabNavigation = (props) => {
    return (
        <SafeAreaView style={BottomTabStyle.itemTabContainer}>
            <Image source={props.imageUri} style={[{
                tintColor: props.tintColor,
            },BottomTabStyle.icScreen]}/>
            <Text style={[{color: props.tintColor,fontWeight:props.isFocused?'bold':'normal'},BottomTabStyle.txtLabel]}>{props.textLabel}</Text>
        </SafeAreaView>
    );
};

export default ItemTabNavigation;