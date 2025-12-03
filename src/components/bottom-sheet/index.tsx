import { useRef } from "react";
import { Button } from "react-native";
import BottomSheetUi from "./bottom-sheet";

const BottomSheetV3 = () => {
      const bottomSheetRef = useRef<{ show: () => void }>(null);

    const handleClosePress = () => bottomSheetRef.current?.show()

    return (
        <>
            <Button title="Close Sheet" onPress={handleClosePress} />
            <BottomSheetUi ref={bottomSheetRef} />
        </>
    )
};

export default BottomSheetV3;