import React from "react";

import { View, Text } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Types/PropType";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ route, navigation }: any) => {
  const name = route.params?.name;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{ color: "black" }}
        onPress={() => {
          navigation.navigate(name || "About", { name: "Home" });
        }}
      >
        {name || "About"}
      </Text>
    </View>
  );
};

// const HomeScreenHeaderRight = () => {
//   return (
//     <View>
//       <Pressable
//         onPress={() => {
//           Alert.alert("You tapped the button!");
//         }}
//       >
//         <Image
//           source={{
//             uri: "https://reactnative.dev/img/tiny_logo.png",
//           }}
//           style={{ width: 50, height: 50, borderRadius: 100 }}
//           resizeMode="cover"
//         />
//       </Pressable>
//     </View>
//   );
// };

export default HomeScreen;

// export { HomeScreenHeaderRight };
