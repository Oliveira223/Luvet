export interface HeroSection {
  title: string;
  description: string;
  cta: string;
  image: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesSection {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface CTASection {
  title: string;
  description: string;
  button_text: string;
}

export interface HomeContent {
  hero: HeroSection;
  features: FeaturesSection;
  cta_section: CTASection;
}
