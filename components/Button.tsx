import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    useColorScheme,
} from "react-native";

type ButtonProps = {
    title: string;
    onPress?: () => void;
};

const Button = ({ title, onPress }: ButtonProps) => {
    const colorScheme = useColorScheme();
    const color = colorScheme === "dark" ? "#5566FF" : "";

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonContainer, { backgroundColor: color }]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        paddingVertical: 20,
    },
    buttonText: {
        color: "white",
        fontFamily: "Lato-Bold",
        fontWeight: "400",
    },
});

export default Button;
