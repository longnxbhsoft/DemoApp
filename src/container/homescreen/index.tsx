import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
} from 'react-native';
import styles from './style';
import images from '../../accest/image';
const Homescreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.viewImage}>
          <Image source={images.logo} style={styles.logo} />
        </View>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('SupportScreen')}>
          <Text style={styles.text_button}>ĐĂNG KÍ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => props.navigation.navigate('SupportScreen')}>
          <Text style={styles.text_button}>HỖ TRỢ 24/7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate('Sale')}>
          <Text style={styles.text_button2}>KHUYẾN MẠI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Homescreen;
