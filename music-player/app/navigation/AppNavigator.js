import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name="AudioList" component={AudioList} />
        <Tab.Screen name="Player" component={Player} />
        <Tab.Screen name="PlayList" component={PlayList} />
    </Tab.Navigator>
}

export default AppNavigator;