import { Client, Account, ID } from 'react-native-appwrite';



const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject('67494fbb0039abd25a47')
    .setPlatform('com.hcore.SoundX');

export const account = new Account(client);