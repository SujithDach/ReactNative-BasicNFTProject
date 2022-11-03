import {
    Text,
    View,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
    Platform,
} from 'react-native';
import { SIZES, SHADOWS, FONTS, assets, COLORS } from '../constants';
import {
    CircleButton,
    RectButton,
    SubInfo,
    FocusedStatusBar,
    DetailsDesc,
    DetailsBid,
} from '../components';
import React from 'react';
const DetailsHeader = ({ data }) => {
    return (
        <View style={{ width: '100%', height: 373 }}>
            <Image
                source={data.image}
                resizeMode='cover'
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
            <CircleButton imgUrl={assets.heart} right={15} top={10} />
        </View>
    );
};

const Details = ({ route }) => {
    const data = route.params;
    return (
        <SafeAreaView>
            <FocusedStatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                }}
            >
                <View
                    style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        paddingVertical: SIZES.font,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255,255,255, 0.5)',
                        zIndex: 1,
                    }}
                >
                    <RectButton
                        minWidth={170}
                        fontSize={SIZES.large}
                        {...SHADOWS.dark}
                    />
                </View>
                <FlatList
                    data={data.bids}
                    renderItem={({ item }) => <DetailsBid bid={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: SIZES.extraLarge * 3,
                    }}
                    ListHeaderComponent={() => (
                        <React.Fragment>
                            <DetailsHeader data={data} />
                            <SubInfo />
                            <View style={{ padding: SIZES.font }}>
                                <DetailsDesc data={data} />
                                {data.bids.length > 0 && (
                                    <Text
                                        style={{
                                            fontSize: SIZES.font,
                                            fontFamily: FONTS.semiBold,
                                            color: COLORS.primary,
                                        }}
                                    >
                                        Current Bids
                                    </Text>
                                )}
                            </View>
                        </React.Fragment>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default Details;
