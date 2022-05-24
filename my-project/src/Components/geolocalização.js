import React, {useState} from "react";
import {View,Text,TouchableHighlight } from "react-native";
import Local from '@react-native-community/geolocation'

export default function(){
    
    const [lat,SetLatitude]=useState(0)
    const [lon,SetLongitude]=useState(0)

    const obterLocal=()=>{
        Local.getCurrentPosition(
            (pos)=>{
                SetLatitude (pos.coords.latitude)
                SetLongitude (pos.coords.longitude)

            },
            (erro)=>{
                alert ('erro'+ erro.message)
            },
            {
                enableHighAccuracy:true,timeout:120000,maximumAge:1000
            }
        )
        
    }

    return(
        <View>
            <Text>Avaliação - Maps</Text>
            <TouchableHighlight
                onPress={obterLocal}
            >
                <Text>Clique aqui para pegar a localização</Text>
            </TouchableHighlight>
            <Text>Latitude:{lat}</Text>
            <Text>Longitude:{lon}</Text>
        </View>
    )

}

