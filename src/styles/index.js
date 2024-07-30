import {StyleSheet} from 'react-native';
import {PrimaryColor, SecondaryColor, btnTextPrimary} from './theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
  scrollContainer: {
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  heading: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#272727',
  },

  form: {
    width: '100%',
    padding: 20,
    flex: 1,
  },

  label: {
    fontSize: 16,
    marginVertical: 5,
  },

  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingLeft: 10,
  },

  inputViewFocused: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: PrimaryColor,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingLeft: 10,
  },

  input: {
    borderRadius: 5,
    borderColor: 'gray',
    padding: 10,
    flex: 1,
  },

  inputFocused: {
    borderRadius: 5,
    padding: 10,
    borderColor: 'blue',
    flex: 1,
  },

  btnPrimary: {
    backgroundColor: SecondaryColor,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },

  btnTextPrimary: {
    color: btnTextPrimary,
    fontSize: 16,
  },

  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginTop: 5,
  },

  headerDropdown: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  product: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

  categoryList: {
    marginLeft: 20,
    marginBottom: 10,
  },
  orderStatusList: {
    marginLeft: 20,
    marginBottom: 10,
  },

  category: {
    paddingVertical: 5,
    marginHorizontal: 3,
    borderRadius: 50,
    borderColor: PrimaryColor,
    alignItems: 'center',
  },
  orderStatus: {
    paddingVertical: 5,
    marginHorizontal: 3,
    borderRadius: 5,
    backgroundColor: '#eee',
  },

  categoryText: {
    fontSize: 12,
    color: '#272727',
    borderRadius: 50,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 15,
  },
  categoryImage: {
    borderRadius: 50,
    height: 56,
    width: 56,
  },
  orderStatusText: {
    fontSize: 16,
    color: '#A2A0A1',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 15,
  },

  categoryTextSelected: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: PrimaryColor,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  orderStatusTextSelected: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: PrimaryColor,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  productSlider: {
    flexDirection: 'row',
  },

  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
    marginLeft: 10,
  },

  sliderItem: {
    width: 150,
    marginLeft: 10,
  },

  sliderImg: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },

  sliderText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#272727',
  },

  sliderPrice: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },

  productBtn: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: PrimaryColor,
    padding: 20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },

  productName: {
    color: '#272727',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  productPrice: {
    color: PrimaryColor,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },

  searchBar: {
    flexDirection: 'row',
    padding: 20,
  },

  searchText: {
    fontFamily: 'Poppins-Regular',
    margin: 20,
    marginBottom: 0,
    fontSize: 16,
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 30,
    paddingHorizontal: 20,
  },

  searchInputFocused: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
  },

  searchBtn: {
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },

  primaryBtn: {
    backgroundColor: PrimaryColor,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },

  secondaryBtn: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },

  cartItem: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 0,
  },

  cartName: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },

  cartPrice: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },

  wishlistItem: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 0,
  },
  wishlistIcon: {
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    marginTop: -25,
    marginEnd: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },

  wishlistName: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    width: '80%',
  },

  wishlistPrice: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },

  cartQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderColor: '#eee',
    borderWidth: 1,
    alignSelf: 'flex-end',
  },

  cartCountBadge: {
    backgroundColor: 'red',
    color: '#fff',
    width: 15,
    height: 15,
    top: -7,
    right: 7,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 10,
  },

  menuTop: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
  },

  menuOptions: {
    height: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },

  menuOption: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center',
  },

  menuText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },

  profile: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  profileIcon: {width: 150, height: 150},

  profileName: {
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#000',
  },

  switch: {
    flexDirection: 'row',
  },

  switchBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },

  switchBtnSelected: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },

  switchText: {
    fontFamily: 'Poppins-Regular',
  },

  switchTextSelected: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },

  orderItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  orderNo: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 16,
  },

  orderItemCount: {
    fontFamily: 'Poppins-Regular',
  },

  orderDate: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'italic',
  },

  normalText: {
    color: 'black',
    textDecorationColor: 'gray',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontStyle: 'bold',
    textDecorationColor: 'gray',
  },
  largeText: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginBottom: 20,
  },
  bottomTabs: {
    height: 0,
  },
  tabLabel: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  rowIcon: {width: 16, height: 16, marginHorizontal: 20},
  tabIcon: {width: 20, height: 20},
  rightArrow: {width: 24, height: 24},
  cartIcon: {width: 30, height: 30},
  cartIconContainer: {
    flexDirection: 'row',
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  headerIconStyle: {width: 40, height: 40},
  signOutText: {
    color: '#FA3636',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    padding: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default styles;
