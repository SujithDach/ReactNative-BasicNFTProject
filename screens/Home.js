import { View, SafeAreaView, FlatList, Platform } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { useState } from 'react';
const Home = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTData);

        const filteredData = NFTData.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        if (filteredData.length) {
            setNftData(filteredData);
        } else {
            setNftData(NFTData);
        }
    };
    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 40 : 0 }}
        >
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={nftData}
                        renderItem={({ item }) => (
                            <NFTCard
                                title={item.name}
                                subTitle={item.creator}
                                img={item.image}
                                price={item.price}
                                BidData={item}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <HomeHeader onSearch={handleSearch} />
                        }
                    />
                </View>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1,
                    }}
                >
                    <View
                        style={{ height: 300, backgroundColor: COLORS.primary }}
                    />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
