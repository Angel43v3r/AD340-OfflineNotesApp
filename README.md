# Offline Notes App
![React Native](https://github.com/Angel43v3r/AD340-ProfilePictureUpdater/blob/main/profile-picture-updater/assets/images/react-logo%403x.png)

## Assignment 12 - Building an Offline Notes App in Expo
### AD340 - Mobile Application Development
### North Seattle College (Spring 2026)
### Date: May 24, 2026


## Table Of Contents
1. [Objective](#objective)
2. [How to Use](#how-to-use)
3. [Assignment Instruction](#assignment-instruction)
4. [Running Test](#running-test-optional)
5. [Contributing](#contributing)
6. [License](#license)


## Objective
Transform a static React Native application into a functional Offline Notes App. Currently, the app loses all data the moment it is closed. The goal is to implement AsyncStorage to ensure user notes persist across app restarts.

- Understand the **Asynchronous Storage** lifecycle in mobile apps.

- Implement `useEffect` for initial data loading.

- Manage local persistence using `@react-native-async-storage/async-storage`.

- Handle JSON serialization and deserialization for complex data types.

## How to Use
### Prerequisites
Make sure you have the following installed:
- **Visual Studio Code (VS Code)**
    - You can use any editor, VSC is recommended for this project. You can download from [VS Code official website](https://code.visualstudio.com/).
    
- **Node.js**
    - This project uses **Node.js 20 (LTS line)** to run the local development server and manage dependencies. You can download from [Node.js official website](https://nodejs.org/en/).

- **Node Package Manager (npm)**: Version 11.6.2 or higher (comes bundled with Node.js)
    - This project use npm to manage the libraries for the project, this comes pre-bundled with Node.js.

- **Expo**
    - This project uses **Expo** to build and run the app on Android and iOS devices.
    - It simplifies setup by handling native configuration and build tools automatically

- **Expo Go** (Optional)
    - **Expo Go** is a mobile app that allows you to quickly preview and test React Native apps on your physical device.
    - It is useful for rapid development without needing a full Android or iOS build setup.
    - You can download from the [Expo Go official website](https://expo.dev/go).
    - The following step is **only needed if you are creating a new React Native project using Expo Go**:

    ```bash
    npx create-expo-app@latest --template
    ```

- **Android Studio** (Optional)
    - **Android Studio** is required to run the app on an Android emulator or a physical device.
    - It provides the Android SDK, emulator, and build tools needed for React Native development.
    - You can download from the [Android Studio official website](https://developer.android.com/studio).


 *Note: To check version installed in your terminal or bash:*
 ```bash
 node -v
 npm -v
 npx -v
 ```

### Installation & Environment Setup
#### 1. Go to your terminal or bash, navigate to the folder you want to save the project:

```bash
cd <Folder_Name>
```
#### 2. Clone the Repository
In the folder you want to save your project in, run:

```bash
git clone git@github.com:Angel43v3r/AD340-OfflineNotesApp.git
```

#### 3. Navigate to the app folder:

```
cd AD340-OfflineNotesApp
```

#### 4. If you haven't yet, install Expo:
 ```bash
    npx create-expo-app@latest --template
```
#### -OR-
```bash
   npx create-expo-app@latest <app-name>
```

*NOTE: Make sure that your core Expo is the same or older version than the version in your phone Expo Go. If not downgrade to match your phone.*

To downgrade to Expo version 54
```bash
npm install expo@54
npx expo install --fix
npx expo start --clear
```


Next, choose a template, I choose `Default`
Lastly, name your app
*Note this will automatically run npm install and install all the needed dependencies for Expo*

#### Install dependencies:
```bash
npx expo install @react-native-async-storage/async-storage
npx expo install lucide-react-native react-native-svg
```
*This is for async storage*

#### 5. Navigate to the folder
```
cd <Folder_Name>
```

#### 6. Start the development server:
```bash
npx expo start
```

#### 7. Once the server starts, **Expo Dev Tool** will open in your browser and a QR code will be displayed in the terminal.
You can then choose one of the following options:

- Scan **QR code** (Recommended):
    - This opens the **Expo Go** app on your mobile device. Make sure that Expo Go app is installed on your phone.
    - If the QR code does not scan, make sure your phone and computer are on the same Wi-Fi network.
- use **Android Studio** Emulator:
    - Make sure the Android Studio is running.
    - You need to open the **Android Studio** in your server, then navigate and open the project folder root. Make sure Android studio is installed. 
    - Press `a -> Android emulator` in your bash or terminal.
- use **iOS simulator (Mac Only)**:
    - Press `i -> iOS simulator` (Mac only).
- Run on **Web Browser**:
    - Press `w -> open web`

#### 8. Open the project in your preferred code editor such as VS Code.


## Assignment Instruction

![Offline Notes App]()

### 🛠️ Starter Code Context
You are starting with a basic UI that has:

#### 1. A `TextInput` for the note.

#### 2. A "Save" button that adds the note to an internal `notes` state array.

#### 3. A `FlatList` to display the notes.

**The Problem:** The `notes` state is volatile. When the app's process is killed, the memory is cleared.

### 📝 The Tasks
#### 1. Installation & Setup
First, you must add the community-maintained storage package to your Expo project.

**Command:** `npx expo install @react-native-async-storage/async-storage`

#### 2. Implement the "Save" Logic
Update your `saveNote` function. Every time a user adds a new note to the state, you must also commit the entire array to local storage.

- **Key:** Use a unique string key like `'@user_notes'`.

- **Storage:** Remember that AsyncStorage only stores **strings**. Use `JSON.stringify()` before saving.

#### 3. Implement the "Load" Logic
Create a function that runs **only once** when the component mounts.

- Use `AsyncStorage.getItem`.

- Check if the returned value is not null.

- Use `JSON.parse()` to convert the string back into a JavaScript array.

- Update the `notes` state with this data.


## Running Test (OPTIONAL)
I did not implement a test on this project. This is how to setup a Vitest as the test runner.

### Installation
If not already installed, in the `TheDynamicDataExplorer` or `root` folder:
```bash
npm install -D vitest
```

### Test Setup
Make sure your `package.json` should include:
```json
"scripts": {
    "test": "vitest",
},
"vitest": {
    "include": ["test/**/*.test.ts"]
},
"devDependencies": {
    "vitest": "^2.0.0"
}
```

Make sure your test folder structure should look like below:
```
ProfilePictureUpdater/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── test/
│   └── index.test.ts
```

### Run Test
In your bash or terminal, navigate to the React Native root folder (TheDailyGrindTodoApp):
```bash
npm test
```

**-OR-** run tests once (CI mode):
```bash
npx vitest run
```


## Contributing
Developed By: **Jovy Ann Nelson**

Instructor: **BC Ko**

Course: **AD340 - Mobile Application Development**

College: **North Seattle College**

Term: **Spring 2026**

Date: **May 18, 2026** to **May 24, 2026**


## License

This project is licensed under the MIT License. Please refer to the [LICENSE](https://github.com/Angel43v3r/AD340-OfflineNotesApp/blob/main/LICENSE) for more details.
