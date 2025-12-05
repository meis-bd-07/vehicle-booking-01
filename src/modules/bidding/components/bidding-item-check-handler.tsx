import CheckIcon from "@assets/icons/core/check";
import UncheckIcon from "@assets/icons/core/uncheck";
import { globalStyles } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { PRICE_FLAG } from "@assets/ts/core.data";
import styles from "@bidding_modules/styles/each-bidding-style";
import { IEachBidding } from "@bidding_modules/types/bidding-list";
import { useBiddingActionState } from "@states/bidding/bidding-action.state";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BiddingItemCheckHandler = ({item}: {item: IEachBidding}) => {
    const {toggleSelect} = useBiddingActionState(s => s);
    const [checked, setChecked] = useState<boolean>(false);
    const handleToggle = () => {
        setChecked(pre => !pre)
        toggleSelect(item.id, !checked);
    }

    return (
        <TouchableOpacity activeOpacity={0.3} onPress={handleToggle} style={[globalStyles.gap2, globalStyles.pt4]}>
            <View style={styles.check}>{checked ? <CheckIcon /> : <UncheckIcon />}</View>
            <Text style={typographies.textS18L20W700}>{PRICE_FLAG[item.priceFlag]}{item.price}</Text>
        </TouchableOpacity>
    )
};

export default BiddingItemCheckHandler;