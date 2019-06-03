import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 10,
  },
  flatList: {},
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbWrapper: {
    flex: -1,
    width: 60,
    height: 40,
    marginRight: 8,
    marginTop: 8,
  },
  thumbImage: {
    width: 60,
    height: 40,
    resizeMode: 'cover',
  },
  titleText: {
    marginLeft: 20,
    fontFamily: fonts.ROBOT_BOLD,
    fontSize: 22,
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
