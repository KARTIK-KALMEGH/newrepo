import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const sections = [
  'Onboarding',
  'Assessment',
  'AI Mentor Chat',
  'Roadmap',
  'Challenges',
  'Internships'
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1020' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ color: '#4F46E5', fontSize: 28, fontWeight: '700' }}>SkillBridge AI</Text>
        <Text style={{ color: '#CBD5E1', marginTop: 8, marginBottom: 16 }}>Career mentor for students and graduates</Text>
        {sections.map((item) => (
          <View key={item} style={{ backgroundColor: '#111827', borderRadius: 12, padding: 16, marginBottom: 10 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
