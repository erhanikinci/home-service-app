import { View, Text, Image, StyleSheet, Touchable } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListItem({ business }) {
  const navigation = useNavigation();
  return (
    <Touchable
      style={styles.container}
      onPress={() =>
        navigation.push("business-detail", {
          business: business,
        })
      }
    >
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 15 }}
        >
          {" "}
          {business.contactPerson}{" "}
        </Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 18 }}>
          {" "}
          {business.name}{" "}
        </Text>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 16 }}
        >
          {" "}
          <MaterialIcons
            name='location-pin'
            size={20}
            color={Colors.PRIMARY}
            style={{ marginRight: 10 }}
          />{" "}
          {business.address}{" "}
        </Text>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
