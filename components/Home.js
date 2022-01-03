import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import reasonData from '../assets/data/reasonData';
import popularData from '../assets/data/popularData';
import christmasData from '../assets/data/christmasData';
import colors from '../assets/colors/colors';
import Carousel from 'react-native-snap-carousel';
import { color, round } from 'react-native-reanimated';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = ({ navigation }) => {
  const renderReasonItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
      </View>
    );
  };

  const renderMemoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.memoryItemWrapper
        ]}>
        <Image source={item.image} style={styles.memoryItemImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../assets/images/olet.jpg')}
              style={styles.profileImage}
            />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.topTitlesWrapper}>
          <Text numberOfLines={1} style={{marginBottom: '-5px'}} style={styles.titlesSubtitle}>Hey,</Text>
          <Text numberOfLines={1} style={styles.titlesTitle}>Happy Birthday!</Text>
        </View>

        <View style={{marginTop: 10}} style={styles.topTitlesWrapper}>
          <Text style={styles.categoriesTitle}>Hooray! 🎉</Text>
          <Text style={styles.messageItemTitle}>It's the birthday of everyone's favorite ENFP!</Text>
          <Text style={styles.messageItemTitle}>Happy birthday baby! I hope you like this</Text>
          <Text style={styles.messageItemTitle}>little gift.</Text>
        </View>

        {/* Reasons */}
        <View style={styles.categoriesWrapper}>
          <Text style={{paddingHorizontal: 20}}>
          <Text style={styles.categoriesTitle}>Why I Love You</Text><Text style={styles.categoryItemTitle}>  (In case u forgot)</Text>
          </Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={reasonData}
              renderItem={renderReasonItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Memories */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Our Memory Board</Text>
          <View
            style={[
              styles.popularCardWrapper,
              {
                marginTop: 20,
                flex: 1,
                flexDirection:'row',
                justifyContent: 'center',
              },
            ]}>
              <FlatList
              showsHorizontalScrollIndicator={false}
              data={christmasData}
              renderItem={renderMemoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  topTitlesWrapper: {
    marginTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  messageItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 5,
  },
  categoriesWrapper: {
    marginTop: 30,
    paddingBottom: 20
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  memoryItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    paddingBottom: 20
  },
  memoryItemImage: {
    borderRadius: 5,
    height: 250,
    width: 50,
    padding: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    paddingBottom: 20
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
    paddingVertical: 5,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    borderRadius: 25,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
