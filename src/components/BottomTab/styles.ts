import {StyleSheet} from 'react-native'
//import {Palette} from '../../themes/colors'

const BottomTabStyle= StyleSheet.create({
    imageMenu:{
        width: 27,
        height: 35,
        resizeMode:'contain',
    },
    centerButton:{
        width:80,
        height:80,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth:5,
        borderRadius:55,
        elevation:1,//android
        shadowOffset:{ //ios
            width:5,
            height:5
        },
        shadowColor:'white',//ios
        shadowOpacity:1,//ios
        shadowRadius:1,//ios,
        zIndex:1,
        marginBottom: 30
    },
    centerButtonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:0,
        elevation:0
    },
    itemTabContainer:{
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 10
    },
    icScreen:{
        width:25,
        height:25,
        resizeMode: 'contain',
    },
    txtLabel:{
        fontSize:12
    }

})

export {BottomTabStyle}