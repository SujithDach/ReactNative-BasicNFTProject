import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, ETHPrice, NFTTitle } from './SubInfo';
const NFTCard = ({ title, subTitle, img, price, BidData }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBotton: SIZES.extraLarge,
                mrgin: SIZES.base,
                ...SHADOWS.dark,
            }}
        >
            <View style={{ width: '100%', height: 250 }}>
                <Image
                    source={img}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>
            <SubInfo />
            <View style={{ width: '100%', padding: SIZES.font }}>
                <NFTTitle
                    title={title}
                    subTitle={subTitle}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <ETHPrice price={price} />
                    <RectButton
                        minWidth={120}
                        fontSize={SIZES.font}
                        handlePress={() =>
                            navigation.navigate('Root', {
                                screen: 'Details',
                                params: BidData,
                            })
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default NFTCard;
