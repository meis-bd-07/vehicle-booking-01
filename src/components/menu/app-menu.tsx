import React, { useState } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";

type IEachOption = {title: string; value: number | string, icon?: React.ReactNode, isDisable?: boolean}

type IEachRender = {
    item: IEachOption;
    index: number;
    isActive: boolean;
}

type IAppMenu = {
    triggerUi: React.ReactNode;
    options: IEachOption[]
    defaultValue?: number | string;
    placeholderText?: string;
    placeholderStyles?: StyleProp<TextStyle>
    placeholder?: React.ReactNode;
    triggerDisable?: boolean;
    renderMenu: (props: IEachRender) => React.ReactNode;
    menuStyles?: StyleProp<ViewStyle>;
    menuOptionStyles?: StyleProp<ViewStyle>;
    onSelect: (item: IEachOption, index: number) => void;
}

const AppMenu = ({
    triggerUi,
    triggerDisable = false,
    placeholderText,
    placeholderStyles = {},
    placeholder,
    options,
    renderMenu,
    menuStyles = {},
    menuOptionStyles = {},
    onSelect,
    defaultValue
}: IAppMenu) => {
    const [active, setActive] = useState<number | string | null>(defaultValue || null);

    const renderPlaceholder = () => {
        if(placeholderText){
            return <MenuOption disabled={true} style={placeholderStyles} text={placeholderText} />
        }
        if(placeholder){
            return placeholder
        }
        return null
    };
    const handleOnSelect = (item: IEachOption, index: number) => {
        onSelect(item, index)
        setActive(item.value);
    }

    return (
        <Menu style={menuStyles}>
            <MenuTrigger disabled={triggerDisable}>{triggerUi}</MenuTrigger>
            <MenuOptions>
                {renderPlaceholder()}
                {options.map((item, index) => (
                    <MenuOption value={item.value} disabled={item.isDisable} style={menuOptionStyles} onSelect={() => handleOnSelect(item, index)} >
                        {renderMenu({
                            item: item,
                            index: index,
                            isActive: item.value === active
                        })}
                    </MenuOption>
                ))}
            </MenuOptions>
        </Menu>
    )
};

export default AppMenu;