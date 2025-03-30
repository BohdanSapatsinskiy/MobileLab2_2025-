import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const PostCard = ({ title, time, mainText, subText, likes, comments }) => {
  const { theme } = useTheme();
  return (
    <View style={theme.postCardContainer}>
      <View>
        <View style={theme.postHeader}>
          <View style={theme.postHeaderLeft}>
            <Image source={require("../img/community/chaticon.png")} />
            <View style={theme.postTextContainer}>
              <View style={theme.postTitleRow}>
                <Text style={theme.postTitle}>{title}</Text>
                <View style={theme.newsTag}>
                  <Text style={theme.newsTagText}>News</Text>
                </View>
              </View>
              <Text style={theme.postTime}>{time}</Text>
            </View>
          </View>
          <Image source={require("../img/community/sharePoints.png")} />
        </View>
        <View style={theme.postContent}>
          <Image source={require("../img/community/postImage.png")} />
          <Text style={theme.postMainText}>{mainText}</Text>
          <Text style={theme.postSubText}>{subText}</Text>
        </View>
        <View style={theme.postFooter}>
          <View style={theme.postFooterLeft}>
            <View style={theme.footerItem}>
              <Image source={require("../img/community/handup.png")} />
              <Text style={theme.likesText}>{likes}</Text>
            </View>
            <View style={theme.footerItem}>
              <Image source={require("../img/community/message-square.png")} />
              <Text style={theme.commentsText}>{comments}</Text>
            </View>
          </View>
          <Image source={require("../img/community/shareBow.png")} />
        </View>
      </View>
    </View>
  );
};

export default PostCard;
