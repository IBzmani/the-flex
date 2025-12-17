export interface Review {
  id: string;
  guestName: string;
  guestImage: string;
  propertyName: string;
  date: string;
  rating: number;
  comment: string;
  tags: { label: string; type: 'neutral' | 'positive' | 'negative' }[];
  channel: 'Airbnb' | 'Booking' | 'Expedia' | 'Direct';
  isPublished: boolean;
}

export interface KPIStats {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
  icon: string;
  colorClass: string;
  iconColorClass: string;
}

export interface DailyStat {
  day: string;
  reviews: number;
  rating: number;
}