import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './navigations/MainStackNavigation'
import { init } from './util/database'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [isDbinitialised, setIsDbInitialised] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await init()
				await new Promise(resolve => setTimeout(resolve, 2000))
			} catch (e) {
				console.warn(e)
			} finally {
				setIsDbInitialised(true)
			}
		}
		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (isDbinitialised) {
			await SplashScreen.hideAsync()
		}
	}, [isDbinitialised])

	if (!isDbinitialised) {
		return null
	}
	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<NavigationContainer>
				<MainStackNavigation />
			</NavigationContainer>
			<StatusBar style='light' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
