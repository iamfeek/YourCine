import {createRouter} from '@expo/ex-navigation';

import YourCine from '../components/screens/YourCineScreen';
import MovieScreen from '../components/screens/MovieScreen';
import TvSeriesScreen from '../components/screens/TvSeriesScreen';
import TheaterScreen from '../components/screens/TheaterScreen';
import HomeScreen from '../components/screens/HomeScreen';
import LinksScreen from '../components/screens/LinksScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
    home: () => HomeScreen,
    yourCine: () => YourCine,
    movieScreen: () => MovieScreen,
    tvSeriesScreen: () => TvSeriesScreen,
    theaterScreen: () => TheaterScreen,
    links: () => LinksScreen,
    settings: () => SettingsScreen,
    rootNavigation: () => RootNavigation,
}));
