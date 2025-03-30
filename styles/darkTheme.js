import { StyleSheet } from "react-native";

export const darkTheme = StyleSheet.create({

    screenContainer: {
        flex: 1,
        backgroundColor: "#1C202C",
      },
      innerChatContainer: {
        marginTop: 20,
        marginLeft: 20,
        flex: 1,
        marginRight: 10,
      },
      chatListContainer: {
        marginTop: 20,
      },
      chatContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
      },
      chatDetailsContainer: {
        gap: 15,
        flexDirection: "row",
        alignItems: "center",
      },
      chatAvatar:{
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      userName: {
        fontSize: 16,
        fontWeight: "400",
        color: "white",
      },
      messageText: {
        fontSize: 14,
        color: "#7B8D9D",
      },

      commumityContainer: {
        flex: 1,
        backgroundColor: "#171A24",
        width: "100%",
      },
      contentContainer: {
        flex: 1,
      },
      descriptionContainer: {
        backgroundColor: "#1C202C",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: "relative",
      },
      descriptionText: {
        fontSize: 14,
        lineHeight: 18,
        color: "#7B8D9D",
        marginBottom: 15,
      },


      profileContainer: {
        flex: 1,
        backgroundColor: "#1C202C",
      },
      profileContent: {
        marginTop: 60,
        marginLeft: 20,
        flex: 1,
        marginRight: 10,
      },
      profileHeader: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      },
      profileImage: {
        borderRadius: 50,
        width: 100,
        height: 100,
      },
      profileName: {
        fontSize: 16,
        fontWeight: "400",
        color: "white",
      },
      profileGroup: {
        fontSize: 16,
        fontWeight: "400",
        color: "white",
      },
      actionButtonsContainer: {
        marginTop: 20,
      },
      actionButton: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"#202532",
        borderColor: "#1C202C",
        margin: 5,
      },
      firstActionButton: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      lastActionButton: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      actionButtonText: {
        fontSize: 16,
        fontWeight: "400",
        color: "white",
      },

      innerContainer: {
        marginTop: 20,
        flex: 1,
      },
      authContainer: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      },
      authTextContainer:{
        marginRight: 20,
        marginLeft: 20,
      },
      authTitle: {
        color: "#7B8D9D",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
      },
      authCode: {
        textAlign: "center",
        color: "white",
        fontSize: 54,
        letterSpacing: 5.52,
        fontWeight: "700",
        marginTop: 5,
      },
      authStatusBar: {
        height: 7,
        backgroundColor: "#2A3B4D",
        marginTop: 10,
        borderRadius: 2,
        width: 114,
        alignItems: "start",
      },
      authIndicator: {
        height: 7,
        width: 80,
        backgroundColor: "#2FB4F1",
        borderRadius: 2,
      },
      authDescription: {
        color: "white",
        fontSize: 14,
        fontWeight: "400",
        marginTop: 20,
        marginBottom: 10,
      },
      authTip: {
        color: "#2FB4F1",
        fontSize: 14,
        fontWeight: "400",
      },
      actionButtonsContainer: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
      },
      actionButton: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"#202532",
        borderColor: "#1C202C",
        margin: 5,
      },
      firstActionButton: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      lastActionButton: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      actionButtonText: {
        fontSize: 16,
        fontWeight: "400",
        color: "white",
      },



      mainBlock: {
        flex: 1,
        backgroundColor: "#1C202C",
      },
      content: {
        marginTop: 20,
        marginLeft: 20,
        flex: 1,
        marginRight: 10,
      },
      block: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
      },
      blockPicture: {
        borderRadius: 5,
        width: 85,
        height: 60,
      },
      blockIcon: {
        width: 12.5,
        height: 12.5,
      },
      gameName: {
        fontSize: 16,
        color: "white",
      },
      gamePrice: {
        marginLeft: "auto",
      },
      gamePriceText: {
        fontSize: 18,
        color: "white",
      },
      platformBlock: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      },
      platformNameText: {
        fontSize: 14,
        color: "#7B8D9D",
      },



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

      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      scrollContainer: {
        width: '100%',
      },
      card: {
        width: 330,
        height: 230,
        borderRadius: 25,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'end',
        position: 'relative',
        overflow: 'hidden',
      },
      cardImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
      },
      cardText: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
      },
      cardTitle: {
        color: 'white',
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold',
      },
      cardAbout: {
        color: '#ececec',
        fontSize: 18,
        margin: 5,
      },
      cardInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      cardPart: {
        width: 'auto',
        height: 22,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        overflow: 'hidden',
      },
      cardDiscount: {
        width: 33,
        height: '100%',
        backgroundColor: 'rgba(0, 212, 74, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cardDiscountText: {
        color: '#ececec',
        fontSize: 12,
      },
      cardPrice: {
        backgroundColor: 'rgba(0, 0, 0, 0.64)',
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 2,
      },
      oldPrice: {
        textDecorationLine: 'line-through',
        marginRight: 5,
        color: '#ececec',
        fontSize: 12,
      },
      newPrice: {
        color: '#ececec',
        fontSize: 12,
      },
      cardPlatform: {
        height: 17,
        width: 17,
        margin: 2,
      },

      sortBlock: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
      },
      sortBtn: {
        width: 103,
        height: 42,
        margin: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#303649",
      },
      sortBtnText: {
        textAlign: "center",
        fontSize: 14,
        color: "white",
      },

      buttonsContainer: {
        flexDirection: 'row',
        backgroundColor:"#303649",
        justifyContent: 'center',
        alignItems: 'center',
        overflow:"hidden",
        height:40,
        borderRadius: 8,
        padding:5,
        marginLeft: 20,
        marginRight: 20,
      },
      tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height:36,
      },
      activeTab: {
        backgroundColor: '#1C202C',
      },
      text: {
        fontSize: 14,
        color:"#7B8D9D",
      },
      activeText: {
        color: 'white',
      },
      
      themeToggleButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#444",
        borderRadius: 5,
        alignItems: "center",
      },
      
      themeToggleText: {
        color: "white",
        fontSize: 16,
      },
      

});