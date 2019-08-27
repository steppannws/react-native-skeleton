import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme';

export const main = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // backgroundColor: colors.WHITE_ALPHA_50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: colors.BLACK,
  },
  menuContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: colors.BLACK,
    paddingTop: 100,
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: colors.BLACK_ALPHA_50,
  },
  slide: {
    width: Dimensions.get('window').width * 0.5,
    height: 400,
    // marginTop: 100,
    // backgroundColor: colors.WHITE,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
 Some common Styling Cheat Sheet:

 alignItems: flex-start, flex-end, center, stretch
 alignSelf: auto, flex-start, flex-end, center, stretch
 flexDirection: row, row-reverse, column, column-reverse
 justifyContent: flex-start, flex-end, center, space-between, space-around
 flexWrap: wrap, nowrap
 position: absolute, relative
 paddingHorizontal: number
 paddingVertical: number
 marginHorizontal: number
 marginVertical: number

 textAlign: auto, left, right, center, justify
 textAlignVertical: auto, top, bottom, center

 backfaceVisibility: visible, hidden
 resizeMode: cover, contain, stretch, repeat, center
 
 */
