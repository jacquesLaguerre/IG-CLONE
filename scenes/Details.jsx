import { Text } from "react-native"
import {View } from 'react-native'
import Post from "../components/Post"
import photoList from "../photolist"
import styles from "../styles"
export default function Details ({route: {params: {itemId}}}, navigation) {
    
    
    const post = photoList.find(photo => photo.id === itemId)
    return (
        <View style={styles.feed}>
        <Post post={post} navigation={navigation}/>
        </View>
    )
}