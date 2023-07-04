import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import { updateUserNotificationToken, getUserDocument} from "../../firebase";

var myNotificationToken;

async function sendPushNotificationToUser(userId, data) {
  console.log("Bora notificar o user " + userId);
  if (!userId) return;
  userDoc = await getUserDocument(userId);
  if (!userDoc) return;
  console.log("Nice docs!");
  notificationToken = userDoc.notificationToken;
  console.log("O token dele eh " + notificationToken);
  if (!notificationToken) return;
  sendPushNotification(notificationToken, data);
}

async function sendPushNotification(expoPushToken, data) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: data.title,
    body: data.body,
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    //console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

async function updateCurrentUserTokenOnDatabase(user) {
    token = MeauNotifications.getNotificationToken();
    updateUserNotificationToken(user, token);
}

const MeauNotifications = {

  // Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
  sendPushNotification: sendPushNotification,
  sendPushNotificationToUser: sendPushNotificationToUser,
  registerForPushNotificationsAsync: registerForPushNotificationsAsync,
  updateCurrentUserTokenOnDatabase: updateCurrentUserTokenOnDatabase,
  getNotificationToken: function() { return myNotificationToken; },
  initNotifications: async function() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    
    token = await registerForPushNotificationsAsync();
    console.log("Token registrado: " + token);
    myNotificationToken = token;
    return token;
  }
};
  
export default MeauNotifications;