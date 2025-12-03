import { globalStyles } from "@assets/styles/global.style.asset";
import CustomStatusBar from "@components/status-bar/index.component";
import { View, ViewStyle } from "react-native";

const PrivateContainer = ({ children, containerStyle }: { children: React.ReactNode; containerStyle?: ViewStyle; }) => (
    /* TODO: add your private layout logic here */
    <View style={globalStyles.flex1}>
        <CustomStatusBar showHeader={false} />
        <View style={[globalStyles.relativeContainer, containerStyle]}>{children}</View>
    </View>
)

export default PrivateContainer;