import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View, StyleSheet, TouchableHighlight, Image, TextInput } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const Profile = () => {
  return <ScrollView style={styles.NOPFxtUT}>
      <View style={styles.mainContainer}>
        <View style={styles.LmuIkaPQ}>
          <View style={styles.headerContainer}>
            <ProfileImage />
            <Text style={styles.headerText}>Jay Mahanga</Text>
            <Text style={styles.headerSubText}>jay@gmail.com</Text>
          </View>
          <View style={styles.subheaderContainer}>
            <Text style={styles.subheaderDetailText}>Details</Text>
            <Text style={styles.subheaderRemoveText}>Delete Account</Text>
          </View>
        <CheckBox style={styles.fvRWUSeg} title="Mechanic"></CheckBox></View>
        <View style={styles.mainBody}>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Name</Text>
            <Input placeholder="Name" />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Email address</Text>
            <Input placeholder="Email address" />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>{"Business Name"}</Text>
            <Input placeholder="Gender" />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>{"About"}</Text>
            <Input placeholder="Password" />
          </View>
        </View>
        <View style={styles.btnSave}>
          <Button onPress={pressed} height={49}>
            Save
          </Button>
        </View>
      </View>
    <CheckBox title="Space for Rent"></CheckBox><CheckBox title="DIYer"></CheckBox></ScrollView>;
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFE94B"
  },
  mt15: {
    marginTop: 15
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center"
  },
  headerText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  headerSubText: {
    marginTop: 5,
    fontSize: 12,
    color: "#1C1A19",
    opacity: 0.5
  },
  subheaderContainer: {
    marginTop: 15,
    marginBottom: 30,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4"
  },
  subheaderDetailText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  subheaderRemoveText: {
    fontSize: 14,
    color: "#FF6848"
  },
  textLabel: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "bold"
  },
  mainBody: {
    // height: '60%'
    backgroundColor: "#FFE94B"
  },
  btnSave: {
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    width: "80%"
  },
  NOPFxtUT: {
    backgroundColor: "#FFE94B"
  },
  LmuIkaPQ: {
    backgroundColor: "#FFE94B",
    width: 328,
    height: 282
  },
  fvRWUSeg: {
    width: 183,
    height: 69,
    position: "relative",
    top: 491,
    left: 0
  }
});
export default Profile;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <View style={[btnStyles.button, {
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
      height: props.height ? props.height : 49,
      borderWidth: props.borderWidth ? props.borderWidth : 0,
      borderColor: props.borderColor ? props.borderColor : "#000000"
    }]}>
        
      </View>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    top: -49,
    left: 135
  }
});

const ProfileImage = () => {
  const navigation = useNavigation();
  return <TouchableHighlight onPress={() => {
    navigation.navigate("uploadMedia");
  }} underlayColor="#DDDDDD">
      <View style={profileStyles.container}>
        <Image style={profileStyles.image} resizeMode="contain" source={require("./assets/edit.png")} />
      </View>
    </TouchableHighlight>;
};

const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: "#DADADA",
    height: 108,
    width: 108,
    borderRadius: 54,
    display: "flex",
    alignItems: "center"
  },
  image: {
    width: 43,
    marginTop: 21
  }
});

const Input = props => {
  return <View>
      <TextInput style={inputStyles.input} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor="#ddd" editable={props.editable !== false} />
      {props.errorText ? <Text style={inputStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 53,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 15,
    position: "relative"
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});