import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme';

export const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  image: {
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
  },
  description: {
    margin: 20,
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
