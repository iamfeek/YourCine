import React from 'React';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

export default class YourCineScreen extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <Text>
                        Tv Series screen
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 80,
    },
});