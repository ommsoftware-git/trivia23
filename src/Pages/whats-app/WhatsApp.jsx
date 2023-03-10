import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const WhatsApp = () => {
  return (
    <>
      <WhatsAppWidget
        phoneNo="8530312323"
        position="left"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={true}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt="Hi Team, is there any related service available ?"
        iconSize="40"
        iconColor="white"
        iconBgColor="#53bf74"
        headerIcon="https://i.ibb.co/Sd8xhC2/trans23jpg.jpg"
        headerIconColor="pink"
        headerTxtColor="black"
        headerBgColor="#53bf74"
        headerTitle="Trans 23"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
        footerBgColor="#999"
        placeholder="Type a message.."
        btnBgColor="#0c5788"
        btnTxt="Start Chat"
        btnTxtColor="white"
      />
    </>
  );
};

export default WhatsApp;
