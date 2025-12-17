import React from 'react';
import { useReviews } from '../context/ReviewsContext';

const RecentReviews: React.FC = () => {
  const { filteredReviews, togglePublish } = useReviews();
  // We use filteredReviews directly from context

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'Airbnb': return (
        <div className="size-6 bg-rose-500 rounded flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined text-[16px]">travel_explore</span>
        </div>
      );
      case 'Booking': return (
        <div className="size-6 bg-blue-900 rounded flex items-center justify-center text-white shrink-0">
          <span className="font-bold text-[10px]">B</span>
        </div>
      );
      default: return (
        <div className="size-6 bg-slate-500 rounded flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined text-[16px]">public</span>
        </div>
      );
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center text-yellow-400 text-sm">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`material-symbols-outlined text-[18px] ${star <= rating ? 'filled' : 'text-slate-300'}`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>
    );
  };

  const getTagStyle = (type: 'positive' | 'negative' | 'neutral') => {
    switch (type) {
      case 'positive': return "bg-green-50 text-green-600 border-green-100 dark:bg-green-900/30 dark:text-green-300 dark:border-green-900";
      case 'negative': return "bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-900";
      default: return "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-900";
    }
  };

  return (
    <div className="xl:col-span-3 bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Reviews</h3>
        <div className="flex gap-2">
          <button className="text-xs font-medium text-slate-500 hover:text-primary px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 transition-colors">All</button>
          <button className="text-xs font-medium text-white px-3 py-1 rounded-full bg-primary shadow-sm shadow-blue-500/30 transition-all">Unpublished</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <th className="px-6 py-4 font-semibold w-[25%]">Guest & Property</th>
              <th className="px-6 py-4 font-semibold w-[15%]">Rating</th>
              <th className="px-6 py-4 font-semibold w-[35%]">Review</th>
              <th className="px-6 py-4 font-semibold w-[15%]">Channel</th>
              <th className="px-6 py-4 font-semibold w-[10%] text-center">Publish</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredReviews.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-4 text-center text-slate-500">No reviews found matching your filters.</td></tr>
            ) : filteredReviews.map((review) => (
              <tr key={review.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 align-top">
                  <div className="flex gap-3">
                    <div
                      className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center shrink-0"
                      style={{ backgroundImage: `url('${review.guestImage}')` }}
                    />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{review.guestName}</p>
                      <p className="text-xs text-slate-500">{review.propertyName}</p>
                      <p className="text-xs text-slate-400 mt-1">{review.date}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 align-top">
                  {renderStars(review.rating)}
                  <span className="text-xs font-bold text-slate-900 dark:text-white mt-1 block">
                    {review.rating.toFixed(1)} <span className="text-slate-400 font-normal">/ 5.0</span>
                  </span>
                </td>
                <td className="px-6 py-4 align-top">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2 line-clamp-2">
                    {review.comment}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {review.tags.map((tag, idx) => (
                      <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getTagStyle(tag.type)}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 align-top">
                  <div className="flex items-center gap-2">
                    {getChannelIcon(review.channel)}
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{review.channel}</span>
                  </div>
                </td>
                <td className="px-6 py-4 align-top text-center">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      type="checkbox"
                      name={`toggle-${review.id}`}
                      id={`toggle-${review.id}`}
                      className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 checked:border-primary transition-all duration-300 left-0"
                      checked={review.isPublished}
                      onChange={() => togglePublish(review.id)}
                    />
                    <label
                      htmlFor={`toggle-${review.id}`}
                      className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer checked:bg-primary transition-colors duration-300"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <p className="text-xs text-slate-500">Showing {filteredReviews.length} reviews</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-medium rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">Previous</button>
          <button className="px-3 py-1 text-xs font-medium rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RecentReviews;