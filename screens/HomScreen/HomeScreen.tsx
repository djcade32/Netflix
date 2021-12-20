import * as React from "react";

import {FlatList, Image} from "react-native"
import { Text, View } from '../../components/Themed';
import styles from "./Styles"
import categories from "../../assets/data/categories"

const firstCategory = categories.items[0];

function HomeScreen(){

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular On Netflix</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item.poster}}/>
        )}
        horizontal={true}
      />
      
    </View>
  );
}

export default HomeScreen;


