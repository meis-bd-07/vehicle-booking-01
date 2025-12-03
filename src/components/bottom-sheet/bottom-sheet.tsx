import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { useCallback, useImperativeHandle, useRef } from "react";
import { StyleSheet, Text } from "react-native";

export type IBottomSheetUiRef = {
    show: () => void
}

interface IBottomSheetUi {
    others?: unknown;
    ref?: React.Ref<IBottomSheetUiRef>;
}

const BottomSheetUi = ({ref}: IBottomSheetUi) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleShowComponent = useCallback(() => {
        () => {
            console.log('---1---')
            handleClosePress()
        }
    }, [])
    useImperativeHandle(ref, () => ({
        show() { handleShowComponent() },
    }), [handleShowComponent]);

    const handleClosePress = () => bottomSheetRef.current?.close()

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <BottomSheet
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheet>
    )
}
export default BottomSheetUi;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});