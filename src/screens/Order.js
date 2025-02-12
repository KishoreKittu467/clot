import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const Order = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <Text
          style={{fontFamily: 'Poppins-SemiBold', fontSize: 22, color: '#000'}}>
          Order Information
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#eee',
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000'}}>
          Delivery Time
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#000'}}>
          10:11 AM
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#000'}}>
          Oct 6, 2022
        </Text>
      </View>

      <View style={{backgroundColor: '#fff', padding: 10}}>
        <View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 5, marginRight: 10}}
              source={{
                uri: 'https://media.glamour.com/photos/6021cb77b9363cc1c90ac4c2/1:1/w_1200,h_1200,c_limit/chair.jpeg',
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#000',
                }}>
                name
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                }}>
                Price
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 5, marginRight: 10}}
              source={{
                uri: 'https://media.glamour.com/photos/6021cb77b9363cc1c90ac4c2/1:1/w_1200,h_1200,c_limit/chair.jpeg',
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#000',
                }}>
                name
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                }}>
                Price
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 5, marginRight: 10}}
              source={{
                uri: 'https://media.glamour.com/photos/6021cb77b9363cc1c90ac4c2/1:1/w_1200,h_1200,c_limit/chair.jpeg',
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#000',
                }}>
                name
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                }}>
                Price
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: '#000',
            }}>
            Subtotal (1 item)
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            $2.0
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: '#000',
            }}>
            Shipping Fee
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            $2.0
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: '#000',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            $2.0
          </Text>
        </View>
      </View>

      <View
        style={{backgroundColor: '#eee', flexDirection: 'row', padding: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000'}}>
          Note
        </Text>
      </View>

      <View style={{backgroundColor: '#fff', flex: 1, padding: 10}}>
        <Text
          style={{
            backgroundColor: '#f7f7f7',
            height: 70,
            padding: 10,
            borderRadius: 5,
          }}>
          this is a note
        </Text>
      </View>
    </ScrollView>
  );
};

export default Order;
