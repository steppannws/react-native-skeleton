import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const main = StyleSheet.create({
  container: {
    // flex: 1,
    height: 40,
    width: 30,
    paddingTop: 5,
  },
  burgerStack: {
    height: 3,
    backgroundColor: colors.BLACK,
    marginTop: 2,
    marginBottom: 2,
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
