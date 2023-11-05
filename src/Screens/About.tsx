import React from "react";

import { View, Text } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const About = ({ navigation }: Props) => {
  return (
    <View>
      <Text
        style={{ color: "black" }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        About
      </Text>
    </View>
  );
};

export default About;
