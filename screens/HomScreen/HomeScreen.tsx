import * as React from "react";

import {FlatList, Image} from "react-native"
import { Text, View } from '../../components/Themed';
import styles from "./HomeScreenStyles"
import categories from "../../assets/data/categories"
import HomeCategory from "../../components/HomeCategory/HomeCategory";

const firstCategory = categories.items[0];

function HomeScreen(){

  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
      />      
    </View>
  );
}

export default HomeScreen;


