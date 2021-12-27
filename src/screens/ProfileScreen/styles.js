import {StyleSheet, Dimensions} from 'react-native'

let window = Dimensions.get('window')

const styles = StyleSheet.create({
  EditProfileBtn: {
    // flex: 1,
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 40,
    width: 100,
    borderRadius: 20,
  },
  PostView: {
    marginTop: -20,
    borderTopEndRadius: 10,
    borderTopStratRadius: 10,
    marginHorizontal: 20,
  },
})

export default styles
