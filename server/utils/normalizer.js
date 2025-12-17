export const calculateAverageRating = (categories) => {
  if (!categories || categories.length === 0) return 0;
  // Hostaway is 1-10, we want 1-5 scale
  const sum = categories.reduce((acc, cat) => acc + cat.rating, 0);
  return Number((sum / categories.length / 2).toFixed(1)); 
};

export const generateTags = (categories) => {
  if (!categories) return [];
  return categories.map(cat => ({
    label: cat.category.replace(/_/g, ' '), 
    type: cat.rating >= 8 ? 'positive' : cat.rating <= 4 ? 'negative' : 'neutral'
  }));
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const normalizeReview = (item) => {
  return {
    id: item.id.toString(),
    guestName: item.guestName,
    // Use consistent placeholders based on ID for demo stability
    guestImage: `https://i.pravatar.cc/150?u=${item.id}`, 
    propertyName: item.listingName,
    date: formatDate(item.submittedAt),
    rating: item.rating ? item.rating / 2 : calculateAverageRating(item.reviewCategory),
    comment: item.publicReview,
    tags: generateTags(item.reviewCategory),
    channel: 'Direct', // Default as API doesn't provide channel
    isPublished: item.status === 'published'
  };
};
