import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "./Themed";

type RotationInputProps = {
  initialValue: string;
  onChange: (value: number) => void;
};

const RotationInput: React.FC<RotationInputProps> = ({
  initialValue,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (value.trim() === '') {
        onChange(0)
    } else {
        onChange(parseInt(value.trim()))
    }
  }, [value]);

  return (
    <>
      <TextInput
        style={styles.inputRotation}
        value={value}
        keyboardType="numeric"
        onChangeText={(newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputRotation: {
    width: 50,
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default RotationInput;
