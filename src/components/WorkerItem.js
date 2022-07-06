import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styles from '../styles/worker'

export const WorkerItem = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.profileButton}>
                <Image source={require("../../assets/circle.png")} style={styles.profileIcon} />
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.km}>2,4km</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WorkerItem