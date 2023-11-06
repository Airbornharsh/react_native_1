import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import { HomeScreen, HomeScreenHeaderRight } from "./src/Screens/HomeScreen";

import AboutScreen from "./src/Screens/AboutScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import { Alert, Image, Pressable, View } from "react-native";

const NavigateApp = () => {
  type RootStackParamList = {
    Home: undefined;
    About: { name?: string };
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();
  // console.log(HomeScreenHeaderRight());

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <View>
                <Pressable
                  onPress={() => {
                    Alert.alert("You tapped the button!");
                  }}
                >
                  <Image
                    source={{
                      uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                    style={{ width: 50, height: 50, borderRadius: 100 }}
                    resizeMode="cover"
                  />
                </Pressable>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={({
            route,
          }: {
            route: RouteProp<RootStackParamList, "About">;
          }) => ({
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigateApp;
