import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";

const AboutTheAppScreen = () => {
  const [ImageSource, setImageSource] = useState();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    setText1("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setText2("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setImageSource(require("./assets/Frame21.png"));
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}>
        <Image source={ImageSource} />
        <Image style={styles.threeDots} source={require("./assets/3Dots.png")} />
      </View>
      <View style={styles.textContainer}>
        
        
      </View>
    <View style={styles.ypUtWRFy}><TextInput style={styles.cfczHiuX} value="Username" clearTextOnFocus={true}></TextInput><TextInput style={styles.fkuqjMOd} value="Password"></TextInput><Text style={styles.RAqsYivI}>{"Login:"}</Text><ImageBackground style={styles.DPpEmgzX} source={require("./24hrauto3sm.jpg")} resizeMode="cover"></ImageBackground><View style={styles.pLosKTHA}></View><Text style={styles.xoeZOZpn}>{"Create new profile!"}</Text></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
  },
  textContainer: {
    paddingHorizontal: 20
  },
  ypUtWRFy: {
    height: 636,
    width: 356,
    backgroundColor: "#000000",
    borderRadius: 0,
    color: "#777777"
  },
  cfczHiuX: {
    backgroundColor: "#ffe94b",
    borderColor: "#cccccc",
    width: 248,
    height: 30,
    position: "absolute",
    left: 54,
    top: 327
  },
  fkuqjMOd: {
    backgroundColor: "#FFE94B",
    borderColor: "#cccccc",
    width: 248,
    height: 30,
    position: "absolute",
    left: 54,
    top: 377
  },
  RAqsYivI: {
    width: 156,
    height: 80,
    lineHeight: 26,
    fontSize: 27,
    borderRadius: 0,
    position: "absolute",
    left: 51,
    top: 298,
    textAlign: "left",
    fontFamily: "Crimson Text",
    color: "#ffffff"
  },
  DPpEmgzX: {
    width: 361,
    height: 215,
    position: "absolute",
    left: -2.5,
    top: 36
  },
  pLosKTHA: {
    height: 44,
    width: 214,
    backgroundColor: "#000000",
    borderRadius: 21,
    color: "#777777",
    position: "absolute",
    left: 70,
    top: 447,
    borderWidth: 4,
    borderColor: "#ffe62c",
    opacity: 1
  },
  xoeZOZpn: {
    width: 209,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    color: "#ffe62c",
    position: "absolute",
    left: 73.5,
    top: 507
  }
});
export default AboutTheAppScreen;