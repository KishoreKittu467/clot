import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import {ProductSlider} from '../components/ProductSlider';
import {ProductGrid} from '../components/ProductGrid';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles';
import {Categories} from '../components/Categories';

const Dashboard = ({navigation}) => {
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);

  const handleBackButtonClick = () => {
    setSearching(false);
    setSearchText('');
    setSearched(false);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.searchBar}>
        <TouchableOpacity
          onPress={() => searchText.length > 0 && setSearched(true)}
          style={styles.searchBtn}>
          <FontAwesomeIcon
            style={{color: '#000', marginRight: 10}}
            icon={faSearch}
          />
        </TouchableOpacity>
        <TextInput
          value={searchText}
          placeholder="Search"
          onChangeText={e => setSearchText(e)}
          style={searching ? styles.searchInputFocused : styles.searchInput}
          onFocus={() => setSearching(true)}
          onBlur={() => setSearching(false)}
          selectionColor="#000"
        />
      </View>

      {searched ? (
        <>
          <ProductGrid navigation={navigation} searchText={searchText} />
        </>
      ) : (
        <>
          <Text style={styles.heading}>Categories</Text>
          <Categories navigation={navigation} />
          <Text style={styles.heading}>Top Selling</Text>
          <ProductSlider navigation={navigation} />
          <Text style={styles.heading}>New In</Text>
          <ProductSlider navigation={navigation} />
          <View style={{height: 100}} />
        </>
      )}
    </ScrollView>
  );
};

export default Dashboard;
