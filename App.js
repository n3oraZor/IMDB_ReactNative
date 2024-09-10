import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#212121" }}>
        <ScrollView style={[styles.container]}>
          <View
            style={{
              height: 400,
              backgroundColor: "#393939",
              height: 60,
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                height: 40,
                width: 100,
                resizeMode: "contain",
              }}
              source={require("./assets/imdb_logo.png")}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                padding: 10,
                fontWeight: 300,
              }}
            >
              Interstellar
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: 10,
              gap: 15,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>2014</Text>
            <Text style={{ color: "white", fontSize: 13 }}>PG-13</Text>
            <Text style={{ color: "white", fontSize: 13 }}>2h 49 min</Text>
            <Text style={{ color: "white", fontSize: 13 }}>
              Advendture, Drama, Sci-Fi
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 180,
              alignItems: "top",
              paddingTop: 20,
              paddingLeft: 10,
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                style={{ height: 170, width: 120, resizeMode: "contain" }}
                source={require("./assets/InterstellarCover.png")}
              />
            </View>

            <View
              style={{ flexDirection: "column", height: 160, width: "68%" }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 13,
                  paddingLeft: 20,
                  width: "90%",
                  justifyContent: "flex-start",
                }}
              >
                A team of explorers travel through a wormhole in pace in an
                attempt to ensure humanity's survival
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#0277BD",
                  padding: 10,
                  margin: 20,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  + ADD TO WATCHLIST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#212121",
              height: 80,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              8.6/10
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              RATE THIS
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Metascore
            </Text>
          </View>
          <View style={{ backgroundColor: "#191919", height: 20 }}></View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  padding: 10,
                  fontWeight: 300,
                  fontWeight: "bold",
                }}
              >
                Top Billet Cast
              </Text>
              <Text
                style={{ color: "#05A8F7", fontWeight: "bold", padding: 10 }}
              >
                SEE ALL
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View
                ScrollView
                style={{
                  flexDirection: "row",
                  gap: 5,
                  paddingLeft: 10,
                  height: 260,
                }}
              >
                <View
                  style={{
                    height: 240,
                    alignItems: "left",
                    backgroundColor: "#2A2A2A",
                  }}
                >
                  <Image
                    style={{
                      height: 200,
                      width: 120,
                      resizeMode: "cover",
                    }}
                    source={require("./assets/matthew.jpg")}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 12,
                      paddingLeft: 5,
                      marginTop: 10,
                      flex: 1,
                      width: 110,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Matthew McConnord
                  </Text>
                  <Text
                    style={{ fontSize: 10, paddingLeft: 5, color: "white" }}
                  >
                    Cooper
                  </Text>
                </View>

                <View
                  style={{
                    height: 240,
                    backgroundColor: "#2A2A2A",
                    alignItems: "left",
                  }}
                >
                  <Image
                    style={{
                      height: 200,
                      width: 120,
                      resizeMode: "cover",
                    }}
                    source={require("./assets/jessica.jpg")}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 12,
                      paddingLeft: 5,
                      marginTop: 10,
                      flex: 1,
                      width: 110,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Jessica
                  </Text>
                  <Text
                    style={{ fontSize: 10, paddingLeft: 5, color: "white" }}
                  >
                    Cooper
                  </Text>
                </View>

                <View
                  style={{
                    height: 240,
                    backgroundColor: "#2A2A2A",
                    alignItems: "left",
                  }}
                >
                  <Image
                    style={{
                      height: 200,
                      width: 120,
                      resizeMode: "cover",
                    }}
                    source={require("./assets/anne.jpg")}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 12,
                      paddingLeft: 5,
                      marginTop: 10,
                      flex: 1,
                      width: 110,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Anne
                  </Text>
                  <Text
                    style={{ fontSize: 10, paddingLeft: 5, color: "white" }}
                  >
                    Cooper
                  </Text>
                </View>

                <View
                  style={{
                    height: 240,
                    backgroundColor: "#2A2A2A",
                    alignItems: "left",
                  }}
                >
                  <Image
                    style={{
                      height: 200,
                      width: 120,
                      resizeMode: "cover",
                    }}
                    source={require("./assets/mackenzie.jpg")}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 12,
                      paddingLeft: 5,
                      marginTop: 10,
                      flex: 1,
                      width: 110,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Mackenzie
                  </Text>
                  <Text
                    style={{ fontSize: 10, paddingLeft: 5, color: "white" }}
                  >
                    Cooper
                  </Text>
                </View>

                <View
                  style={{
                    height: 240,
                    backgroundColor: "#2A2A2A",
                    alignItems: "left",
                  }}
                >
                  <Image
                    style={{
                      height: 200,
                      width: 120,
                      resizeMode: "cover",
                    }}
                    source={require("./assets/InterstellarCover.png")}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 12,
                      paddingLeft: 5,
                      marginTop: 10,
                      flex: 1,
                      width: 110,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Matthew McConnord
                  </Text>
                  <Text
                    style={{ fontSize: 10, paddingLeft: 5, color: "white" }}
                  >
                    Cooper
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        <View style={{ paddingTop: 0, paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>Director</Text>
          <Text style={{ color: "#BDBDBD", fontSize: 12 }}>
            Christopher Nolan
          </Text>
        </View>
        <View style={{ paddingTop: 5, paddingLeft: 10, paddingBottom: 20 }}>
          <Text style={{ color: "white" }}>Writers</Text>
          <Text style={{ color: "#BDBDBD", width: "80%" }}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    color: "white",
  },
  imdblogo: {
    height: 50,
    width: 50,
  },
});
