export interface CulturalHeritage {
  id: string;
  name: string;
  bn_name: string;
  type: 'festival' | 'food' | 'language' | 'tradition' | 'art' | 'music' | 'dance' | 'craft';
  region: string; // Specific region or 'national' for nationwide
  district?: string;
  division?: string;
  description: string;
  significance: string;
  history?: string;
  celebration_period?: string;
  ingredients?: string[]; // For food items
  preparation_method?: string; // For food items
  associated_festivals?: string[];
  cultural_importance: 'high' | 'medium' | 'low';
  unesco_status?: boolean;
}