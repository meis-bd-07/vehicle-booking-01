import { colors } from "@assets/styles/colors.style.asset";
import { SCREEN_HEIGHT } from "@assets/ts/core.data";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT + 40,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    overflow: 'hidden',
    /* shadow */
    shadowColor: colors.black, // for iOS shadow color
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,        
    shadowRadius: 3.84,         
    elevation: 5,  // Android shadow
  },
  line: {
    width: 44,
    backgroundColor: colors.gray7,
    alignSelf: 'center',
    borderRadius: 1.5,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
  },
});
export default styles;