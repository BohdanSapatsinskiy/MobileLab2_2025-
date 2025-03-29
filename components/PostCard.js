import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PostCard = ({ title, time, mainText, subText, likes, comments }) => {
  return (
    <View style={styles.postCardContainer}>
      <View>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Image source={require("../img/community/chaticon.png")} />
            <View style={styles.postTextContainer}>
              <View style={styles.postTitleRow}>
                <Text style={styles.postTitle}>{title}</Text>
                <View style={styles.newsTag}>
                  <Text style={styles.newsTagText}>News</Text>
                </View>
              </View>
              <Text style={styles.postTime}>{time}</Text>
            </View>
          </View>
          <Image source={require("../img/community/sharePoints.png")} />
        </View>
        <View style={styles.postContent}>
          <Image source={require("../img/community/postImage.png")} />
          <Text style={styles.postMainText}>{mainText}</Text>
          <Text style={styles.postSubText}>{subText}</Text>
        </View>
        <View style={styles.postFooter}>
          <View style={styles.postFooterLeft}>
            <View style={styles.footerItem}>
              <Image source={require("../img/community/handup.png")} />
              <Text style={styles.likesText}>{likes}</Text>
            </View>
            <View style={styles.footerItem}>
              <Image source={require("../img/community/message-square.png")} />
              <Text style={styles.commentsText}>{comments}</Text>
            </View>
          </View>
          <Image source={require("../img/community/shareBow.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postCardContainer: { 
    marginVertical: 10, 
    padding: 10, 
    borderRadius: 8, 
    backgroundColor: "#1C202C" 
  },
  postHeader: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 10 
  },
  postHeaderLeft: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 9 
  },
  postTextContainer: { 
    marginLeft: 10 
  },
  postTitleRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10 
  },
  postTitle: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "white" 
  },
  newsTag: { 
    backgroundColor: "#B63DB6", 
    borderRadius: 3, 
    paddingHorizontal: 5, 
    height: 14, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  newsTagText: { 
    fontSize: 10, 
    color: "white" 
  },
  postTime: { 
    fontSize: 12, 
    color: "#7B8D9D" 
  },
  postContent: { 
    marginBottom: 10 
  },
  postMainText: { 
    fontSize: 14, 
    color: "white", 
    marginVertical: 5 
  },
  postSubText: { 
    fontSize: 14, 
    color: "#7B8D9D" 
  },
  postFooter: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },
  postFooterLeft: { 
    flexDirection: "row", 
    gap: 10 
  },
  footerItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 5 
  },
  likesText: { 
    fontSize: 12, 
    color: "#007722" 
  },
  commentsText: { 
    fontSize: 12, 
    color: "#505050" 
  },
});

export default PostCard;
