/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'lightblue',
                },
                headerStyle: {
                    backgroundColor: 'lightblue',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato',
                }
        }}
        >
            <Tab.Screen
                key={'Curret'}
                name={'Currnt'}
                options={{
                tabBarIcon: ({ focused }) => (
                    <Feather
                    name={'droplet'}
                    size={25}
                    color={focused ? 'tomato' : 'black'}
                    />
                ),
            }}
            >{() => <CurrentWeather weatherData={weather.list[0]} />}</Tab.Screen>
            <Tab.Screen
            key={'Upcoming'}
            name={'Upcoming'}
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'clock'}
                size={25}
                color={focused ? 'tomato' : 'black'}
                />
            ),
            }}
            >{() => <UpcomingWeather weatherData={weather.list} />}</Tab.Screen>
            <Tab.Screen
            key={'City'}
            name={'City'}
            component={City}
            options={{
            tabBarIcon: ({ focused }) => (
                <Feather
                name={'home'}
                size={25}
                color={focused ? 'tomato' : 'black'}
                />
            ),
            }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
