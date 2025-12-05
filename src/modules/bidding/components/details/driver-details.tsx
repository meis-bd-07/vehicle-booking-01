import { IEachBidding } from "@bidding_modules/types/bidding-list";
import { View } from "react-native";
import styles from "@bidding_modules/styles/driver-details-style";
import ReviewDetails from "./review-details";

const DriverDetails = ({item}: {item: IEachBidding}) => {
    return (
        <View style={styles.body}>
            <ReviewDetails item={item} />
        </View>
    );
};

export default DriverDetails;