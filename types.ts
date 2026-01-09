
export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  points?: string[] | { title: string; desc: string }[];
  footer?: string;
  type: 'hero' | 'list' | 'pillars' | 'grid' | 'roadmap' | 'cta';
  ctaText?: string;
  contact?: string[];
}

export interface AppState {
  currentSlide: number;
  isFullScreen: boolean;
  aiInsight: string | null;
  loadingAi: boolean;
}
