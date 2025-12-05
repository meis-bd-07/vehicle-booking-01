import { colors } from "@assets/styles/colors.style.asset";
import rs from "@assets/styles/responsiveSize.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { messages } from "@assets/text-and-message/messages.asset";
import useSplash from "@auth_modules/hooks/useSplash.hook";
import { splashStyles as styles } from "@auth_modules/styles/splash.style";
import ImagePreview from "@components/image-preview/Index.component";
import { config } from "@config";
import SplashContainer from "@routes/layouts/splash-container";
import { ActivityIndicator, Text, View } from "react-native";

const Splash = () => {
    const {} = useSplash();
    return (
        <SplashContainer>
            <View style={styles.splashContainer}>
                <ImagePreview
                    source={{uri: config.splashLogo}}
                    svgProps={{width: rs(280), height: rs(200)}}
                    containerStyle={{backgroundColor: colors.transparent}}
                    isSvg={true}
                />
                <View style={styles.textWrpAlt}>
                    <ActivityIndicator color={colors.white} size={'large'} />
                    <Text style={[typographies.textS14L21W400, {color: colors.white}]}>{messages.configurationApp}</Text>
                </View>
            </View>
        </SplashContainer>
    );
};

export default Splash;