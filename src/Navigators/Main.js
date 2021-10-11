import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexHomeContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
import { DetailContactContainer } from "@/Containers"

const Tab = createBottomTabNavigator()
const ContactStack = createStackNavigator()

const IndexHome = () => {
  return (
  <ContactStack.Navigator>
    <ContactStack.Screen name='contact' component={IndexHomeContainer} />
    <ContactStack.Screen name='detailContact' component={DetailContactContainer} />
  </ContactStack.Navigator>
  )
}

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Contact" component={IndexHome} />
    </Tab.Navigator>
  )
}

export default MainNavigator
