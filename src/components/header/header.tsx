import ArrowLeft from "@assets/icons/core/arrow-left";
import { colors } from "@assets/styles/colors.style.asset";
import { customPadding } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import CustomStatusBar from "@components/status-bar/index.component";
import { useNavigation } from "@react-navigation/native";
import showAlertWithOneAction from "@utils/helpers/show-aleart-with-one-action";
import { ReactElement } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

interface IType {
    showStatusBar?: boolean;
    height?: number;
    containerStyle?: ViewStyle;
    wrapperStyle?: ViewStyle;
    paddingTop?: number;
    bg?: string;
    onPressLeft?: () => void;
    showLeftIcon?: boolean;
    leftStyles?: StyleProp<ViewStyle>;
    title?: string;
    titleStyle?:StyleProp<TextStyle>;
    titleComponent?: ReactElement;
    rightComponent?: ReactElement;
}

const Header = ({
    showStatusBar = true,
    height = 80,
    containerStyle = {},
    wrapperStyle = {},
    paddingTop = 0,
    bg = colors.transparent,
    onPressLeft,
    showLeftIcon = true,
    leftStyles = {},
    title = "",
    titleStyle = {},
    titleComponent,
    rightComponent,
}: IType) => {
    const navigation = useNavigation();

    const handleLeftPress = () => {
        showAlertWithOneAction({title: 'back icon press'})
        if (onPressLeft) return onPressLeft();
        if (navigation.canGoBack()) return navigation.goBack();
    }
    return (
        <View style={[styles.containerStyle, {height: height, paddingTop: paddingTop, backgroundColor: bg}, containerStyle]}>
            {showStatusBar && <CustomStatusBar barStyle="dark-content" />}
            <View style={[styles.wrapperStyle, wrapperStyle]}>
                <View style={styles.leftContainer}>
                    {showLeftIcon && <TouchableOpacity
                        onPress={handleLeftPress}
                        style={[styles.left, leftStyles]}
                        activeOpacity={0.7}
                    >
                        <ArrowLeft />
                    </TouchableOpacity>}
                    {title && <Text numberOfLines={1} style={[styles.title,typographies.headerSemiBold, titleStyle]}>{title}</Text>}
                    {titleComponent && titleComponent}
                </View>
                {rightComponent && rightComponent}
            </View>
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    containerStyle: {...customPadding(16, 16, 16 ,16)},
    wrapperStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
    },
    leftContainer: {
        flexDirection: 'row',
        gap: 12,
        flexShrink: 1
    },
    left: {
        shadowColor: '#000', // for iOS shadow color
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,        
        shadowRadius: 3.84,         
        elevation: 5,  // Android shadow
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    title: {textAlignVertical: 'center', flex: 1}
})
