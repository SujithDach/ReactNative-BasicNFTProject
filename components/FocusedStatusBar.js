// import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const FocusedStatusBar = (background) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar animated={true} {...background} /> : null;
};

export default FocusedStatusBar;
