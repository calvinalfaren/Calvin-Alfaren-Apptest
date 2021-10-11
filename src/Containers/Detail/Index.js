import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import DetailContact from '@/Store/Contact/DetailContact'
import { useNavigation } from '@react-navigation/native'

const DetailContactContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.item)
  const contact = useSelector(state => state.contact.contact)
  const fetchOneUserLoading = useSelector(state => state.user.fetchOne.loading)
  const fetchOneUserError = useSelector(state => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')

  const navigation = useNavigation()

  const fetch = id => {
    setUserId(id)
    if (id) {
      dispatch(FetchOne.action(id))
    }
  }

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  // useEffect(
  //   () => {
  //     dispatch(DetailContact.action({params}))
  //   }
  // )

  // const Item = ({ item, onPress, backgroundColor, textColor }) => (
    
  //   <TouchableOpacity onPress={onPress} style={{display: 'flex', backgroundColor: 'red', width: '100%'}}>
  //     <Image
  //       style={{width: 30, height: 30}}
  //       source={item.photo}
  //     />
  //     <Text>{item.firstName} {item.lastName}</Text>
  //   </TouchableOpacity>
  // );
  
  const renderContact = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';
    let contactId = item.id;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('detailContact', {contactId})} style={{backgroundColor: '#e5e5e5', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, marginBottom: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 30, marginRight: 15}}
            source={{uri : item.photo}}
          />
          <Text style={{fontSize: 16, color: '#000'}}>{item.firstName} {item.lastName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // console.log('kontak', contact)
  return (
    <View>
      {/* <FlatList
        data={contact}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
        // extraData={selectedId}
      /> */}
      <Text>DetailContactContainer</Text>
    </View>
  )
}

export default DetailContactContainer
