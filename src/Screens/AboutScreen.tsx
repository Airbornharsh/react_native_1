import React from "react";

import { View, Text } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Types/PropType";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "About"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const AboutScreen = ({ route, navigation }: any) => {
  const name = route.params?.name;

  return (
    <View>
      <Text
        style={{ color: "black" }}
        onPress={() => {
          navigation.navigate(name, { name: "About" });
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default AboutScreen;
