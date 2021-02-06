import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function first({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Second")}
    >
      <View style={styles.container}>
        <View style={styles.red}></View>
        <View style={styles.green}></View>
        <View style={styles.blue}></View>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

function second({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Third")}
    >
      <View style={styles.containerSecond}>
        <View style={styles.red}></View>
        <View style={styles.green}></View>
        <View style={styles.blue}></View>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

function third({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Fourth")}
    >
      <View style={styles.containerSecond}>
        <View style={styles.red}></View>
        <View style={styles.container}>
          <View style={styles.yellow}></View>
          <View style={styles.cyan}></View>
          <View style={styles.magenta}></View>
        </View>
        <View style={styles.blue}></View>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

function fourth({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Fifth")}
    >
      <View style={styles.container}>
        <View style={styles.red}></View>
        <View style={styles.containerSecond}>
          <View style={styles.yellow}></View>
          <View style={styles.cyan}></View>
          <View style={styles.magenta}></View>
        </View>
        <View style={styles.blue}></View>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

function fifth({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Sixth")}
    >
      <View style={styles.container}>
        <View style={styles.yellow}>
          <Text style={styles.text}>Bandomasis tekstas</Text>
        </View>
        <View style={styles.cyan}>
          <Text style={styles.text}>Bandomasis tekstas</Text>
        </View>
        <View style={styles.magenta}>
          <Text style={styles.text}>Bandomasis tekstas</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}
function sixth({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("First")}
    >
      <View style={styles.container}>
        <View style={styles.yellow}>
          <TouchableWithoutFeedback style={styles.button}>
            <Text style={styles.text}>Befuncinis mygtukas</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.cyan}>
          <TouchableWithoutFeedback style={styles.button}>
            <Text style={styles.text}>Befuncinis mygtukas</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.magenta}>
          <TouchableWithoutFeedback style={styles.button}>
            <Text style={styles.text}>Befuncinis mygtukas</Text>
          </TouchableWithoutFeedback>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={first} />
        <Stack.Screen name="Second" component={second} />
        <Stack.Screen name="Third" component={third} />
        <Stack.Screen name="Fourth" component={fourth} />
        <Stack.Screen name="Fifth" component={fifth} />
        <Stack.Screen name="Sixth" component={sixth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  containerSecond: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  red: {
    backgroundColor: "#f00",
    flex: 1,
  },
  green: {
    backgroundColor: "#0f0",
    flex: 1,
  },
  blue: {
    backgroundColor: "#00f",
    flex: 1,
  },
  yellow: {
    backgroundColor: "#ff0",
    flex: 1,
    justifyContent: "center",
  },
  magenta: {
    backgroundColor: "#f0f",
    flex: 1,
    justifyContent: "center",
  },
  cyan: {
    backgroundColor: "#0ff",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 35,
    textAlign: "center",
    lineHeight: 50,
  },
  button: {
    backgroundColor: "#00f",   
    alignSelf: 'center',
  }

});
