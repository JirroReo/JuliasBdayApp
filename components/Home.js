import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';
import AnimatedSplash from "react-native-animated-splash-screen";

import colors from '../assets/colors/colors';
import reasonData from '../assets/data/reasonData';
import christmasData from '../assets/data/christmasData';
import moaData from '../assets/data/moaData';
import mopData from '../assets/data/mopData';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount = () => {
    this._isMounted = true;
    this._isMounted && setTimeout(() => { this._isMounted && this.setState({ isLoading: false})},1000);
  }

  componentWillUnmount() {
   this._isMounted = false;
  }

  renderReasonItem = ({ item }) => {
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

  renderMemoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.memoryItemWrapper
        ]}>
        <Image source={item.image} style={styles.memoryItemImage} />
      </View>
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <AnimatedSplash
          isLoaded={!this.state.isLoading}
          logoImage={require("../assets/images/logosq.png")}
          backgroundColor={"#fab927"}
          logoHeight={150}
          logoWidth={150}
        >
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={[
              styles.headerCardWrapper,
                {
                  backgroundColor: colors.white,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 100
                },
              ]}>
                <ImageBackground source={require('../assets/images/bg.png')} resizeMode='cover' style={{justifyContent: 'center', borderRadius: 20}} imageStyle={{height: 294, borderRadius: 20}}>
                <SafeAreaView>
                  <View style={styles.headerWrapper, {marginTop: -50, alignItems: 'center'}}>
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
              </ImageBackground>
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
                  renderItem={this.renderReasonItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                />
              </View>
            </View>
  
            {/* Memories */}
            <View style={styles.popularWrapper}>
              <Text style={styles.popularTitle}>Our Memory Board</Text>

              <View style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                <View style={[ styles.popularCardWrapper,
                    {
                      marginTop: 20,
                      flex: 1,
                      flexDirection:'row',
                      justifyContent: 'center',
                    },
                  ]}>
                    <Carousel
                      ref={c => carousel = c }
                      renderItem={this.renderMemoryItem}
                      sliderWidth={240}
                      itemWidth={240}
                      layout={"default"}
                      data={christmasData}
                      sliderHeight={400}
                      itemHeight={400}
                      enableSnap={true}
                      loop={true}
                    />
                </View>
    
                <View style={[ styles.popularCardWrapper,
                    {
                      marginTop: 20,
                      flex: 1,
                      flexDirection:'row',
                      justifyContent: 'center',
                    },
                  ]}>
                    <Carousel
                      ref={c => this.carousel = c }
                      renderItem={this.renderMemoryItem}
                      sliderWidth={240}
                      itemWidth={240}
                      layout={"default"}
                      data={mopData}
                      sliderHeight={400}
                      itemHeight={400}
                      enableSnap={true}
                      loop={true}
                    />
                </View>
                
                <View style={[ styles.popularCardWrapper,
                    {
                      marginTop: 20,
                      flex: 1,
                      flexDirection:'row',
                      justifyContent: 'center',
                    },
                  ]}>
                    <Carousel
                      ref={c => carousel = c }
                      renderItem={this.renderMemoryItem}
                      sliderWidth={240}
                      itemWidth={240}
                      layout={"default"}
                      data={moaData}
                      sliderHeight={400}
                      itemHeight={400}
                      enableSnap={true}
                      loop={true}
                    />
                </View>
              </View>

            </View>
          </ScrollView>
        </AnimatedSplash>
      </View>
    );
  }
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
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
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
    height: 200,
    width: 120,
    padding: 50,
    marginTop: 10,
    alignSelf: 'center'
  },
  headerCardWrapper: {
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
    elevation: 5,
    paddingBottom: 20,
    marginTop: 20,
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
    marginLeft: -50,
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
