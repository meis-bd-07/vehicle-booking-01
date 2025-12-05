import { globalStyles } from "@assets/styles/global.style.asset";
import { IEachBidding } from "@bidding_modules/types/bidding-list";
import { View } from "react-native";
import React from "react";
import DriverReviews from "./driver-reviews";

const ReviewDetails = ({item}: {item: IEachBidding}) => {

    return (
        <View style={[globalStyles.gap12, globalStyles.flexShrink1]}>
            <DriverReviews 
                driverId={item.driver.id}
                item={item}
            />
        </View>
    )
};
export default ReviewDetails;