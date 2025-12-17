import { Review, KPIStats, DailyStat } from './types';

export const STATS_DATA: KPIStats[] = [
  {
    label: 'Average Rating',
    value: '4.8',
    change: '+0.2',
    isPositive: true,
    period: 'vs last month',
    icon: 'star',
    colorClass: 'bg-blue-50 dark:bg-blue-900/20',
    iconColorClass: 'text-primary'
  },
  {
    label: 'Total Reviews',
    value: '1,240',
    change: '+5%',
    isPositive: true,
    period: 'vs last month',
    icon: 'reviews',
    colorClass: 'bg-purple-50 dark:bg-purple-900/20',
    iconColorClass: 'text-purple-600'
  },
  {
    label: 'NPS Score',
    value: '72',
    change: '+2',
    isPositive: true,
    period: 'vs last month',
    icon: 'sentiment_satisfied',
    colorClass: 'bg-orange-50 dark:bg-orange-900/20',
    iconColorClass: 'text-orange-600'
  },
  {
    label: 'Response Rate',
    value: '98%',
    change: '+1%',
    isPositive: true,
    period: 'vs last month',
    icon: 'reply',
    colorClass: 'bg-teal-50 dark:bg-teal-900/20',
    iconColorClass: 'text-teal-600'
  }
];

export const CHART_DATA: DailyStat[] = [
  { day: '01', reviews: 12, rating: 4.2 },
  { day: '02', reviews: 18, rating: 4.5 },
  { day: '03', reviews: 8, rating: 3.8 },
  { day: '04', reviews: 22, rating: 4.9 },
  { day: '05', reviews: 14, rating: 4.1 },
  { day: '06', reviews: 19, rating: 4.6 },
  { day: '07', reviews: 25, rating: 4.8 },
  { day: '08', reviews: 15, rating: 4.0 },
  { day: '09', reviews: 20, rating: 4.7 },
  { day: '10', reviews: 10, rating: 3.9 },
  { day: '11', reviews: 24, rating: 4.8 },
  { day: '12', reviews: 28, rating: 4.9 },
  { day: '13', reviews: 16, rating: 4.3 },
  { day: '14', reviews: 12, rating: 4.1 },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    guestName: 'Sarah Jenkins',
    guestImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcDCj1jpr3GT3IRe_Y69zlZ5Y9M6cq6o9HmEOTeS3WASFld6fyUtFO-yDIhg_xt8hu3G9PXQ8ToKZl9YlRUxX3r2Q5b1DkbKkQhnPU4sLC2K-1K1fdOdr-qPLJA5JPRnhdKURq75nrv7TX5ECclFmGH5VddW-ZpuD4xyyDb0KN3xNKZdo5RFrvObn6ObH-g0EnvvgfBDNZplzUVYGaj1srH-gpi5M4GPI12HiN6lDGxbew2Fqj1hZ8R5h_GMtbfrwDRxYqwmhC2T8',
    propertyName: 'The Modern Loft, NYC',
    date: 'Oct 24, 2023',
    rating: 5.0,
    comment: '"Absolutely amazing stay! The interior design was stunning and the location couldn\'t be better. Highly recommend for anyone visiting the city."',
    tags: [
      { label: 'Interior', type: 'positive' },
      { label: 'Location', type: 'positive' }
    ],
    channel: 'Airbnb',
    isPublished: true
  },
  {
    id: '2',
    guestName: 'Michael Chen',
    guestImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8CDDTyMsZtio_RODmT8Zzt4jPJjqlxb_B-y3YGljjgW8M0u45utIYwi3jsRABn_c0OTCSt7pTyMQzDOELQfDmKHnkSh4JlMaEYWmOTpROv_Qs0zRXc8mG9gHCZeKEtIrwGql1B1X8kKsl7LMq9pU7wHbht4dhiyPF2Xakcb4JGqW0wktbcTH9dT9NXJ25PS4NnZhn0zcT2lNBOHC9aADKIqVrqLa7rNp5gOazp8mps4MMFHoQxOyclb5jg9K5Cwrgf1vU448sGe8',
    propertyName: 'Sunny Villa, LA',
    date: 'Oct 22, 2023',
    rating: 3.0,
    comment: '"The place was generally nice but a bit noisy at night due to the street traffic. Check-in was smooth though."',
    tags: [
      { label: 'Noise', type: 'negative' },
      { label: 'Check-in', type: 'positive' }
    ],
    channel: 'Booking',
    isPublished: false
  },
  {
    id: '3',
    guestName: 'Emma Wilson',
    guestImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcgz9XOKYDQ8p9NhJXz9-tzq-I_eynw8VPjUbBZ5tdBZGnkjiiC80dYm4oJtJy3DHGR85jDkgEpon8Tenap222gJow0TcYoLhAgUXt_aP9Su1JXEqBiuoiiG40PhNxFiFdS1mXGSpqQ7vrQXCb2AiDT07Vj2yBocGOVFO3MaztnT5xQp4CQCc__YT95jQ8sP8USlqGawHcQ7bFI5-I1Fh6MHE7sCfizIlOP8IGwnCYbwjReFYF9jlh_EIiCwF_qVj37Mqt72g9vII',
    propertyName: 'Cozy Cabin, Aspen',
    date: 'Oct 20, 2023',
    rating: 4.0,
    comment: '"Great value for money. The cabin was clean and cozy. Just wished the WiFi was a bit faster."',
    tags: [
      { label: 'Value', type: 'positive' },
      { label: 'Cleanliness', type: 'positive' }
    ],
    channel: 'Airbnb',
    isPublished: true
  }
];