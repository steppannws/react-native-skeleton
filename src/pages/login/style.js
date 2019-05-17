import { StyleSheet } from 'react-native';

export const main = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleWrapper: {
    alignItems: 'center',
    marginVertical: 100,
  },
  titleText: {
    fontSize: 26,
  },
  formWrapper: {
    flex: 1,
  },
  fieldWrapper: { margin: 10 },
  textInput: {
    fontSize: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    paddingVertical: 10,
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
