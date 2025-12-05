# Vehicle Booking App

A React Native mobile application for vehicle booking with smooth animations, state management, and modular architecture.

---

## Table of Contents

1. [Installation and Running](#installation-and-running)

   * [Android](#android)
   * [iOS](#ios)
2. [Technical Choices](#technical-choices)
3. [Core Features](#core-features)
4. [Screenshots / Video](#screenshots--video)
5. [GitHub Repository](#github-repository)
6. [APK Download](#apk-download)

---

## Installation and Running

### Android

1. Navigate to the project root directory:

   ```bash
   cd your-project-root
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the Android app:

   ```bash
   npm run android
   ```
4. Start the Metro bundler:

   ```bash
   npm start
   ```

**Note:**
If you encounter port issues, run:

```bash
npm run kill-port
```

Then repeat steps 3 and 4.

### iOS

1. Install dependencies:

   ```bash
   npm install
   ```
2. Navigate to the `ios` folder:

   ```bash
   cd ios/
   ```
3. Install CocoaPods dependencies:

   ```bash
   pod install
   ```
4. Run the iOS app:

   ```bash
   npm run ios
   ```
5. Start the Metro bundler:

   ```bash
   npm start
   ```

---

## Technical Choices

* **Framework:** React Native CLI
* **Navigation:** `react-navigation`
* **Animations:** `react-native-gesture-handler` and `react-native-reanimated`
* **State Management:** `zustand` (uni-directional data flow)
* **Type Safety:** Fully implemented with TypeScript
* **Code Structure:**

  * Centralized project architecture
  * Module-wise implementation for easier feature addition and tracking
* **Packages:** Only lightweight, widely-used, and industry-trendy packages are used
* **Dummy Data:** Created using ChatGPT for testing purposes

---

## Core Features

1. **Draggable Behavior:** Smooth drag interactions using `react-native-gesture-handler` and `react-native-reanimated`.
2. **Full Screen Expansion:** Expandable components with animations.
3. **Sticky Header on Scroll:**

   * Implemented using React Native’s `VirtualizedList`
   * Scroll events handled via `react-native-gesture-handler` and `react-native-reanimated`.

---

## Screenshots / Video

Screenshots or a short screen recording will be attached here for demonstration purposes.

---

## GitHub Repository

[https://github.com/meis-bd-07/vehicle-booking-01](https://github.com/meis-bd-07/vehicle-booking-01)

---

## APK Download

Google Drive folder link:
[https://drive.google.com/drive/folders/1TOvPi8SyrbWCfrjArky9LeInrpY4E1y9?usp=sharing](https://drive.google.com/drive/folders/1TOvPi8SyrbWCfrjArky9LeInrpY4E1y9?usp=sharing)

---

*Developed with focus on performance, modularity, and industry-standard practices.*
