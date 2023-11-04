import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [count, setCount] = React.useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000A19",
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#000A19",
          height: "100%",
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* <Button title="ADD" color="blue" onPress={addCount} /> */}
        <TouchableOpacity onPress={addCount}>
          <View
            style={{
              marginBottom: 20,
              width: 260,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2196F3",
            }}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
              ADD
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>{count}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
