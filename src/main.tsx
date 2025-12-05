import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppWrapper from "@providers/app/App.provider";
import RouterIndex from "@routes/Index.route";
import LocalizationProvider from "@providers/localization/Localization.provider";
import { navigationRef } from "@packages/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { globalStyles } from "@assets/styles/global.style.asset";
import BottomSheetIndex from "@components/bottom-sheet";

const MainIndex = () => {
    return (
        <GestureHandlerRootView style={globalStyles.flex1}>
            <SafeAreaProvider>
                <LocalizationProvider>
                    <NavigationContainer ref={navigationRef}>
                        <AppWrapper>
                            <RouterIndex />
                        </AppWrapper>
                        <BottomSheetIndex />
                    </NavigationContainer>
                </LocalizationProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
};

export default MainIndex
