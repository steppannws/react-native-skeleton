### CodePush - Get Started
First of all you will need an [AppCenter](https://appcenter.ms/) account as CodePush is now a part of the AppCenter platform. The service is free to use and you can use your Google or Github account to sign up.

Once logged in to AppCenter, you must add a new App, specifying its **name**, **release type**, **OS** and **platform**. It is recommended to create an app for iOS and an app for Android.
Afterwards you will go into the newly created App's console and go under **Distribute > CodePush** and press press the **Create standard deployments** button. You will then see a list of instructions that you will need to follow in order to setup CodePush for your app. When the instructions ask for a CodePush Key, you can check yours by going to the top right corner and pressing wrench-button. There you'll find a Key for each deployment stage.

**Notes:**
- You should install the CodePush SDK to your App the **MANUAL** way, as using `react-native link` doesn't always work
- You don't need to release the app to the stores, you can still use this tool while on early development stages
- Make sure to read the **Store Guideline Compliance** to check if your usage of CodePush is infringing any Store Terms
- **Remember to change the CodePush Keys in your code**

