import Dodecahedron from "@/assets/icons/dodecahedron";
import Colors from "@/constants/Colors";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? Colors.dark.text : Colors.light.text;
  if (icon === "cube") {
    return (
      <FontAwesome
        name={icon ?? "cube"}
        color={color}
        size={24}
        testID="icon"
      />
    );
  }
  if (icon === "cone") {
    return (
      <MaterialCommunityIcons
        name="cone"
        size={24}
        color={color}
        testID="icon"
      />
    );
  }
  if (icon === "dodecahedron") {
    return <Dodecahedron fill={color} height={24} width={24} testID="icon" />;
  }
  if (icon === "color-fill") {
    return <Ionicons name="color-fill" size={24} color={color} testID="icon" />;
  }
  if (icon === "screen-rotation-alt") {
    return (
      <MaterialIcons
        name="screen-rotation-alt"
        size={24}
        color={color}
        testID="icon"
      />
    );
  }
};

export default Icon;
