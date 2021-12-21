import * as React from "react";

import {FlatList, Image} from "react-native"
import { Text } from '../../components/Themed';
import styles from "./HomeCategoryStyles"


interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
    
}

function HomeCategory(props: HomeCategoryProps){
const {category} = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item.poster}}/>
        )}
        horizontal={true}
      />
      
    </>
  );
}

export default HomeCategory;


