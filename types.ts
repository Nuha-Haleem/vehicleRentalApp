import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

// --- Shared Mock Data ---
export const VEHICLES = [
  // Mock data matching the style of the Home screen image
  { id: '1', name: 'Toyota Prius 2017', price: '8,500', rating: 4.8, location: 'Dehiwala, Colombo', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1000&auto=format&fit=crop' },
  { id: '2', name: 'Chevrolet Cruze', price: '12,000', rating: 4.5, location: 'Kandy Town', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop' },
  { id: '3', name: 'Suzuki Alto', price: '6,000', rating: 4.2, location: 'Nugegoda, Colombo', image: 'https://images.unsplash.com/photo-1558980838-89c56580f4f7?q=80&w=1000&auto=format&fit=crop' },
];

export const LANGUAGES = [
  { name: 'Sinhala', flag: 'https://flagcdn.com/w160/lk.png' },
  { name: 'English', flag: 'https://flagcdn.com/w160/us.png' },
  { name: 'Tamil',   flag: 'https://flagcdn.com/w160/in.png' },
];

// --- Navigation Types ---

// 1. Root Stack Parameter List (Screens visible outside the tabs)
export type RootStackParamList = {
  Splash: undefined;
  Language: undefined;
  MainTabs: undefined; // Leads to the tab navigator
  Search: undefined;
  Details: { item: typeof VEHICLES[0] };
  Contact: undefined;
};

// 2. Tab Stack Parameter List (Screens inside the Bottom Tabs)
export type TabParamList = {
  Home: undefined;
  Saved: undefined;
  Post: undefined;
  Chat: undefined;
  Profile: undefined;
};

// 3. Screen Props (for type safety)
export type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type LanguageProps = NativeStackScreenProps<RootStackParamList, 'Language'>;
export type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;
export type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type ContactProps = NativeStackScreenProps<RootStackParamList, 'Contact'>;

// Props for screens within the Bottom Tabs
export type HomeProps = BottomTabScreenProps<TabParamList, 'Home'>;
export type PostProps = BottomTabScreenProps<TabParamList, 'Post'>;
export type ProfileProps = BottomTabScreenProps<TabParamList, 'Profile'>;

// --- Shared Styles ---
export const sharedStyles = StyleSheet.create({
  containerWhite: { flex: 1, backgroundColor: '#ffffff' },
  row: { flexDirection: 'row', alignItems: 'center' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  primaryButton: { backgroundColor: '#2C65F8', paddingVertical: 16, borderRadius: 30, alignItems: 'center', shadowColor:'#2C65F8', elevation:5 },
  primaryButtonText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
  navHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  navTitle: { fontSize: 18, fontWeight: 'bold' },
});