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

const Home = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{ color: "black" }}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        Home
      </Text>
    </View>
  );
};

export default Home;
