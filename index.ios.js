/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';


const PHOTOS = [
    {source: {uri: 'https://placebear.com/300/200'}, caption: 'Grizzly'},
    {source: {uri: 'https://placebear.com/300/201'}, caption: 'Grizzly'},
    {source: {uri: 'https://placebear.com/300/202'}, caption: 'Grizzly'},
    {source: {uri: 'https://placebear.com/300/203'}, caption: 'Grizzly'},
];

export default class PhotoViewer extends Component {
    render() {
        return (
            <ScrollView styles={styles.container}>
                {
                    PHOTOS.map(photo =>
                        <View style={styles.imageBlock}>
                            <Image source={{uri: photo.source.uri}} style={styles.image}/>
                            <Text>{photo.caption}</Text>
                        </View>
                    )
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 20,
    },
    imageBlock: {
        margin: 10,
    },
    image: {
        width: 350,
        height: 300,
    }
});

AppRegistry.registerComponent('PhotoViewer', () => PhotoViewer);
