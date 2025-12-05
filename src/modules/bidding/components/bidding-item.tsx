import HeartIcon from "@assets/icons/core/heart";
import LocationIcon from "@assets/icons/core/location";
import RightAngleIcon from "@assets/icons/core/right-angle";
import StarIcon from "@assets/icons/core/star";
import { colors } from "@assets/styles/colors.style.asset";
import { globalStyles } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { titles } from "@assets/text-and-message/titles.asset";
import styles from "@bidding_modules/styles/each-bidding-style";
import { IBiddingItem } from "@bidding_modules/types/bidding-list";
import ImagePreview from "@components/image-preview/Index.component";
import Bidding from "@controllers/models/Bidding";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { Text, TouchableOpacity, View } from "react-native";
import BiddingItemCheckHandler from "./bidding-item-check-handler";
import Vehicle from "@controllers/models/Vehicle";

const BiddingItem = ({item, index, goToDetails}: IBiddingItem) => {

    return (
        <TouchableOpacity key={index} style={styles.container} activeOpacity={0.7} onPress={() => goToDetails(item)}>
            <ImagePreview 
                source={{uri: item.driver.image || ''}}  
                styles={styles.image}
                borderRadius={26}
                containerStyle={{backgroundColor: colors.transparent}}
                skeletonStyles={styles.image}
            />
            <View style={styles.body}>
                <View style={[globalStyles.gap10, globalStyles.flexShrink1]}>
                    <View style={globalStyles.gap2}>
                        <Text style={typographies.nameTextW400} numberOfLines={1}>{item.driver.name || 'No name found'}</Text>
                        <Text style={typographies.textSubTitleW400}>
                            {`${item.vehicle.length || ''} ${item.vehicle.capacity || ''} ${Vehicle.getType(item.vehicle.type || '')}`.trim()}
                        </Text>
                    </View>
                    <View style={styles.ratingWrp}>
                        <View style={styles.starCircle}><StarIcon /></View>
                        <View style={styles.ratingInfo}>
                            <Text style={[typographies.textSubTitleW400, {color: getHexaOpacityColorCode(colors.black, 0.64)}]}>{titles.ratingTitle}</Text>
                            <Text style={[typographies.textSubTitleW500, globalStyles.fontBold]}>{Bidding.calculationRating(item.ratingResult)}</Text>
                            <RightAngleIcon />
                        </View>
                        <View style={styles.gpsInfo}>
                            <View style={[styles.starCircle, {backgroundColor: colors.locationOpacity}]}><LocationIcon /></View>
                            <Text style={[typographies.textSubTitleW400]}>{titles.gps}</Text>
                        </View>
                    </View>
                    {item.isFavorite && (<View style={styles.favoriteWrp}>
                        <HeartIcon />
                        <Text numberOfLines={1} ellipsizeMode="clip" style={[typographies.textS10W400, {color: colors.heartRed}]}>{titles.markFavorite}</Text>
                    </View>)}
                </View>

                <BiddingItemCheckHandler item={item} />
            </View>
        </TouchableOpacity>
    )
};

export default BiddingItem;