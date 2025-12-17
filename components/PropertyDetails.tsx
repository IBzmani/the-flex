import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReviews } from '../context/ReviewsContext';
import LogoIcon from './LogoIcon';

const PropertyDetails: React.FC = () => {
  const navigate = useNavigate();
  const { reviews } = useReviews();
  const mainRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setIsScrolled(mainRef.current.scrollTop > 10);
      }
    };

    const element = mainRef.current;
    element?.addEventListener('scroll', handleScroll);
    return () => element?.removeEventListener('scroll', handleScroll);
  }, []);

  const navBgClass = isScrolled ? 'bg-[#284E4C] border-[#284E4C]' : 'bg-white dark:bg-card-dark border-gray-200 dark:border-gray-700';
  const navTextClass = isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white';
  const logoColorClass = isScrolled ? 'text-white' : 'text-primary';
  const logoTextClass = isScrolled ? 'text-white' : 'text-primary dark:text-white';

  return (
    <div ref={mainRef} className="font-body bg-background-cream dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen w-full absolute inset-0 z-50 overflow-y-auto">
      <nav className={`${navBgClass} border-b sticky top-0 z-50 shadow-sm transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a
                className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                href="#"
              >
                <LogoIcon className={`${logoColorClass} w-8 h-8 transition-colors duration-300`} />
                <span className={`font-display font-bold text-xl ${logoTextClass} tracking-tight transition-colors duration-300`}>the flex.</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a className={`text-sm font-medium flex items-center gap-1 transition-colors duration-300 ${navTextClass}`} href="#">
                <i className="fa-solid fa-user-tie text-xs"></i> Landlords <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </a>
              <a className={`text-sm font-medium flex items-center gap-1 transition-colors duration-300 ${navTextClass}`} href="#">
                <i className="fa-solid fa-circle-info text-xs"></i> About Us
              </a>
              <a className={`text-sm font-medium flex items-center gap-1 transition-colors duration-300 ${navTextClass}`} href="#">
                <i className="fa-solid fa-briefcase text-xs"></i> Careers
              </a>
              <a className={`text-sm font-medium flex items-center gap-1 transition-colors duration-300 ${navTextClass}`} href="#">
                <i className="fa-regular fa-envelope text-xs"></i> Contact
              </a>
              <div className={`border-l h-6 mx-2 transition-colors duration-300 ${isScrolled ? 'border-white/20' : 'border-gray-300 dark:border-gray-600'}`}></div>
              <button className={`text-sm font-medium flex items-center gap-1 transition-colors duration-300 ${navTextClass}`}>
                <img alt="UK Flag" className="w-4 h-auto rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqLsBkQg_SsUqd4QluTTO4Rqp5K-ZA-6OJFPxCKO3gT-PSGk4Pght8YRjiiYJ07owWaUYVFFMcfmgCjqWlUx3s9StL0kTKEXLFYnFGI998BsXR3cSWKC346MdqF-oGBHeULz8hkok8FLlbO8ddGB_TmnH3ZeqqUmUPUG3HXmr0zAefWhPTFOzia2xeNsqCxjmET7DOQvWNMfb9LsQFOZVnlALVAR5omLVh8RqnCMH-JmOA49yXy8yKwy7S5VS72IAy2okDV3sFjWk" /> English
              </button>
              <button className={`text-sm font-medium transition-colors duration-300 ${navTextClass}`}>
                $ USD
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-card-dark border-b border-gray-100 dark:border-gray-700 shadow-lg py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
            <a className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary flex items-center gap-2" href="#">
              <i className="fa-solid fa-user-tie w-6 text-center"></i> Landlords
            </a>
            <a className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary flex items-center gap-2" href="#">
              <i className="fa-solid fa-circle-info w-6 text-center"></i> About Us
            </a>
            <a className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary flex items-center gap-2" href="#">
              <i className="fa-solid fa-briefcase w-6 text-center"></i> Careers
            </a>
            <a className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary flex items-center gap-2" href="#">
              <i className="fa-regular fa-envelope w-6 text-center"></i> Contact
            </a>
            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 flex items-center justify-between">
              <button className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2">
                <img alt="UK Flag" className="w-5 h-auto rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqLsBkQg_SsUqd4QluTTO4Rqp5K-ZA-6OJFPxCKO3gT-PSGk4Pght8YRjiiYJ07owWaUYVFFMcfmgCjqWlUx3s9StL0kTKEXLFYnFGI998BsXR3cSWKC346MdqF-oGBHeULz8hkok8FLlbO8ddGB_TmnH3ZeqqUmUPUG3HXmr0zAefWhPTFOzia2xeNsqCxjmET7DOQvWNMfb9LsQFOZVnlALVAR5omLVh8RqnCMH-JmOA49yXy8yKwy7S5VS72IAy2okDV3sFjWk" /> English
              </button>
              <button className="text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded px-3 py-1">
                $ USD
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-3 h-[300px] md:h-[500px] rounded-lg overflow-hidden relative">
            <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer h-full">
              <img
                alt="Modern bright bedroom main view"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqgytZSxhbY4q84EBiw_7E3CXTVLb1tD9rAR-L-VojFgG7qtxDCp0qHIJgnQwuAY351byeqBUYqsj7EAtTlW5yU4aSB89KgwwgGF2xYX0UEi-KaPg-futRDanqirGFpUJqb1IT3UlvnACa8LjBYT5925c9b55n6pWCy1HLqBw2F_cjX1CXcbpqP3gOf_YIdjsrhmtcMLgpg0T3L8dq90HRuSqq2q2fnbO4BBjR45EQNK2EcUwnS-gZY1qPjEPuRNU97lDEJj77e4U"
                loading="eager"
                {...{ fetchPriority: "high" } as any}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="hidden md:block relative group cursor-pointer">
              <img alt="Apartment interior detail" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBudIArI_AhSbtwS1ckVSINXiQM-mftRO31-fS9Gnw2rYCe9Jsh1VdayEb47brkfX-EzgDXUhkL_gqshKqaU525GNb7DDhT4THgiPWrGSKH8l9cHN0c5mebLm3YpJ3DL19cDQC52bsAep4c39gA1D8RY_tr6_cOa2gfLEgGRH7YOOIMZzoQ2KwAgyCtMhu5tdqiYeVDdE3cTWsFSPSUK5_Vr5if_YryooLSylz7dRC33TeDFPZ-dpjwP5LxbRtZcJQvdk5XHt00fVs" />
            </div>
            <div className="hidden md:block relative group cursor-pointer">
              <img alt="Kitchen amenities" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5T-JzyNzky96aD3nlh-fTuRT5a-jqRQDf2u7WPnJot5BMkj7khwZnJ1wjAxV8v92YU3PHQiOp9Wt2Gmxwkfg4PnnM5WDBq5V4OP4OJr5X_wOSWGpRSddN4Z51v8piBIXFl1HzjOwNKGckZlGeLk8etJjVLNKKZr0308b7wlF_WDVFkYYC7fjIpc3Ke29sE4tSIM-tPw9ABczoaSZ6ulPUilUdBVrqbISgxutcXMQdVis3wlfR_BwYGrMuOHesRjoR0scYcwQNqqA" />
            </div>
            <div className="hidden md:block relative group cursor-pointer">
              <img alt="Bathroom view" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZwd_Dc75VCcdMh1ti6R2S1-tAHgQjVykh1n4gemDpPtcqpI_1QnSCgWzn5i4vwQrb9SM4FqqbijpeeRPMgT9GK1Ugf_M_HE_cqZQ9jUmf2Nohnx6W_OrooqwxGNDKaZ9WYJdyh9oBxG2u2czAr60DdCpZVgg3928Prae-SimdjRALw2f3FOnfO2I4qnIJg0zPuccWJiMTrC11YVWUZIjUFxPvuCM1OMSvIIe3mAvfPD-L_xCv7hZa20v_lKVxMIb6ysfVNvQTSuk" />
            </div>
            <div className="hidden md:block relative group cursor-pointer">
              <img alt="Living room area" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy9-KeRBtkL-Ko0obr3TYxQfIPgNL45D12CCZxLNX22tBXQVF_sEipaOI7tcsFndxAzPaQ6PDv3Ob___E4R6LqduPb20q4tj9mBj8M2aA1jOkWAUuQk19Uayzi-3nbrmcSpkTqAuTZ7EaIpYaZrJqNyNugOPGnQOf7K1CuQX895b-WD_ThmIRRXWVcsthj2l6z2m8qKAw0fNjN--40YdJKjFj_bOtNUICO3rO8dTlXxEd9U92KRbs85nOuD4M1LlFhfTgxtDloDOg" />
            </div>
            <button className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-md text-xs font-medium shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition z-10">
              <i className="fa-solid fa-grip-dots mr-1"></i> View all photos
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Lovely and Relaxing Room in the Heart of Morden</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-user-group text-lg text-gray-400"></i>
              <span>2 Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-bed text-lg text-gray-400"></i>
              <span>1 Bedroom</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-bath text-lg text-gray-400"></i>
              <span>1 Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-door-open text-lg text-gray-400"></i>
              <span>1 Bed</span>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1 text-primary dark:text-teal-400 font-semibold">
                <i className="fa-solid fa-star"></i> 4.92 <span className="text-gray-400 font-normal underline decoration-gray-400 cursor-pointer">({reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-card-dark p-6 md:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About this property</h2>
              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-3">
                  Enjoy a comfortable stay in this bright and tidy private room located in Morden, South London. The room features a comfortable bed, storage space, and access to a shared kitchen and bathroom — perfect for solo travelers or couples.
                </p>
                <p>
                  The property is situated in a quiet and safe neighborhood, just a s... <button className="font-semibold underline text-gray-900 dark:text-white hover:text-primary">Read more</button>
                </p>
              </div>
            </section>

            <section className="bg-white dark:bg-card-dark p-6 md:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Amenities</h2>
                <button className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition w-full sm:w-auto text-center">View all amenities <i className="fa-solid fa-chevron-right text-xs ml-1"></i></button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2">
                  <span className="material-icons text-gray-400">tv</span> Cable TV
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2">
                  <span className="material-icons text-gray-400">wifi</span> Internet & Wireless
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2">
                  <span className="material-icons text-gray-400">kitchen</span> Kitchen
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2">
                  <span className="material-icons text-gray-400">local_laundry_service</span> Washing Machine
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2">
                  <span className="material-icons text-gray-400">dry</span> Hair Dryer
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2">
                  <span className="material-icons text-gray-400">work</span> Dedicated workspace
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-card-dark p-6 md:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 flex-wrap">
                  Guest Reviews
                  <span className="text-xs font-normal bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800">Curated Highlights</span>
                </h2>
                <div className="flex items-center gap-1 text-yellow-500">
                  <i className="fa-solid fa-star"></i>
                  <span className="text-lg font-bold text-gray-900 dark:text-white ml-1">4.92</span>
                </div>
              </div>
              <div className="grid gap-6">
                {reviews.filter(r => r.isPublished).length === 0 ? (
                  <p className="text-gray-500 italic">No reviews available yet.</p>
                ) : (
                  reviews.filter(r => r.isPublished).map(review => (
                    <div key={review.id} className="bg-alt-surface-light dark:bg-alt-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-600 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-primary dark:text-white">
                        <span className="material-symbols-outlined text-[60px]">format_quote</span>
                      </div>
                      <div className="flex items-center mb-4 relative z-10">
                        <img
                          alt={review.guestName}
                          className="w-12 h-12 rounded-full mr-4 border-2 border-white dark:border-gray-600 object-cover"
                          src={review.guestImage}
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{review.guestName}</h4>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{review.date}</div>
                        </div>
                        <div className="ml-auto flex text-yellow-400 text-xs gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`material-symbols-outlined text-[14px] ${star <= review.rating ? 'filled' : 'text-slate-300'}`}
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              {star <= review.rating ? 'star' : 'star'}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 relative z-10 italic">
                        "{review.comment}"
                      </p>
                    </div>
                  ))
                )}
              </div>
              <button className="mt-6 w-full py-2 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                Show all {reviews.length} reviews
              </button>
            </section>

            <section className="bg-white dark:bg-card-dark p-6 md:p-8 rounded-xl shadow border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Stay Policies</h2>
              <div className="bg-alt-surface-light dark:bg-alt-surface-dark p-6 rounded-lg mb-4">
                <div className="flex items-start gap-3 mb-4">
                  <i className="fa-regular fa-clock text-gray-900 dark:text-white mt-1"></i>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Check-in & Check-out</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-card-dark p-3 rounded border border-gray-100 dark:border-gray-600">
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">Check-in Time</span>
                    <span className="font-bold text-gray-900 dark:text-white">3:00 PM</span>
                  </div>
                  <div className="bg-white dark:bg-card-dark p-3 rounded border border-gray-100 dark:border-gray-600">
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">Check-out Time</span>
                    <span className="font-bold text-gray-900 dark:text-white">10:00 AM</span>
                  </div>
                </div>
              </div>

              <div className="bg-alt-surface-light dark:bg-alt-surface-dark p-6 rounded-lg mb-4">
                <div className="flex items-start gap-3 mb-4">
                  <i className="fa-solid fa-shield-halved text-gray-900 dark:text-white mt-1"></i>
                  <h3 className="font-semibold text-gray-900 dark:text-white">House Rules</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="bg-white dark:bg-card-dark px-4 py-2 rounded border border-gray-100 dark:border-gray-600 flex items-center gap-2">
                    <i className="fa-solid fa-ban text-red-400"></i> No smoking
                  </div>
                  <div className="bg-white dark:bg-card-dark px-4 py-2 rounded border border-gray-100 dark:border-gray-600 flex items-center gap-2">
                    <i className="fa-solid fa-ban text-red-400"></i> No pets
                  </div>
                  <div className="bg-white dark:bg-card-dark px-4 py-2 rounded border border-gray-100 dark:border-gray-600 flex items-center gap-2">
                    <i className="fa-solid fa-ban text-red-400"></i> No parties or events
                  </div>
                  <div className="bg-white dark:bg-card-dark px-4 py-2 rounded border border-gray-100 dark:border-gray-600 flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-green-500"></i> Security deposit required
                  </div>
                </div>
              </div>

              <div className="bg-alt-surface-light dark:bg-alt-surface-dark p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <i className="fa-regular fa-calendar-xmark text-gray-900 dark:text-white mt-1"></i>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Cancellation Policy</h3>
                </div>
                <div className="bg-white dark:bg-card-dark p-4 rounded border border-gray-100 dark:border-gray-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">For stays less than 28 days</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Full refund up to 14 days before check-in</li>
                    <li>No refund for bookings less than 14 days before check-in</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-card-dark p-6 md:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Location</h2>
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=29%20Shoreditch%20High%20St%2C%20London&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                  title="Property Location"
                ></iframe>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <p><i className="fa-solid fa-location-dot mr-2 text-primary"></i> 29 Shoreditch High St, London E1 6PN, United Kingdom</p>
                <a href="https://maps.google.com/maps?q=29%20Shoreditch%20High%20St%2C%20London" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Open in Google Maps</a>
              </div>
              <a className="inline-block mt-4 text-sm underline text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Browse more short term flats in London</a>
            </section>
          </div>

          <div className="lg:col-span-1 relative">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-card-dark rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="bg-primary p-4 text-white">
                  <h3 className="font-bold text-lg">Book Your Stay</h3>
                  <p className="text-xs text-green-100 opacity-90">Select dates to see prices</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Check-in</label>
                      <div className="relative">
                        <input className="w-full pl-9 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 dark:text-white focus:ring-primary focus:border-primary" placeholder="Select dates" type="text" />
                        <i className="fa-regular fa-calendar absolute left-3 top-2.5 text-gray-400"></i>
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Guests</label>
                      <div className="relative">
                        <select className="w-full pl-9 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 dark:text-white focus:ring-primary focus:border-primary appearance-none">
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                        </select>
                        <i className="fa-solid fa-user absolute left-3 top-2.5 text-gray-400"></i>
                        <i className="fa-solid fa-chevron-down absolute right-3 top-3 text-xs text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-[#162e2c] transition shadow-lg shadow-primary/20">
                    Check availability
                  </button>
                  <button className="w-full bg-white dark:bg-transparent border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 font-semibold py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center justify-center gap-2">
                    <i className="fa-regular fa-comment"></i> Send Inquiry
                  </button>
                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
                      <i className="fa-solid fa-bolt text-yellow-500"></i> Instant booking confirmation
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-4 text-gray-400 dark:text-gray-500">
                <i className="fa-brands fa-cc-visa text-2xl"></i>
                <i className="fa-brands fa-cc-mastercard text-2xl"></i>
                <i className="fa-brands fa-cc-amex text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <h3 className="font-display font-bold text-lg mb-4">Join The Flex</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Sign up now and stay up to date on our latest news and exclusive deals including 5% off your first stay!
              </p>
              <form className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input className="w-full bg-[#2A4846] border-none rounded px-3 py-2 text-sm placeholder-gray-400 text-white focus:ring-1 focus:ring-white" placeholder="First name" type="text" />
                  <input className="w-full bg-[#2A4846] border-none rounded px-3 py-2 text-sm placeholder-gray-400 text-white focus:ring-1 focus:ring-white" placeholder="Last name" type="text" />
                </div>
                <input className="w-full bg-[#2A4846] border-none rounded px-3 py-2 text-sm placeholder-gray-400 text-white focus:ring-1 focus:ring-white" placeholder="Email address" type="email" />
                <div className="flex gap-2">
                  <div className="w-1/3 bg-[#2A4846] rounded px-2 py-2 text-sm text-gray-300 flex items-center justify-between cursor-pointer">
                    🇬🇧 +44
                  </div>
                  <input className="w-2/3 bg-[#2A4846] border-none rounded px-3 py-2 text-sm placeholder-gray-400 text-white focus:ring-1 focus:ring-white" placeholder="Phone number" type="tel" />
                </div>
                <button className="w-full bg-white text-primary font-bold py-2 rounded shadow hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <i className="fa-solid fa-paper-plane text-xs"></i> Subscribe
                </button>
              </form>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-4">The Flex</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Professional property management services for landlords, flexible corporate lets for businesses and quality accommodations for short-term and long-term guests.
              </p>
              <div className="flex gap-4">
                <a className="text-white hover:text-gray-300 transition" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a className="text-white hover:text-gray-300 transition" href="#"><i className="fa-brands fa-instagram"></i></a>
                <a className="text-white hover:text-gray-300 transition" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a className="hover:text-white" href="#">Blog</a></li>
                  <li><a className="hover:text-white" href="#">Careers</a></li>
                  <li><a className="hover:text-white" href="#">Terms & Conditions</a></li>
                  <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-4">Locations</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a className="hover:text-white uppercase tracking-wide text-xs" href="#">London</a></li>
                  <li><a className="hover:text-white uppercase tracking-wide text-xs" href="#">Paris</a></li>
                  <li><a className="hover:text-white uppercase tracking-wide text-xs" href="#">Algiers</a></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p className="font-bold text-white mb-1"><i className="fa-solid fa-headset mr-2"></i> Support Numbers</p>
                </div>
                <div className="flex items-start gap-2">
                  <img alt="UK" className="mt-1 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTHJxlInNT6IeN6oDwLI041X1CMflghX6zEWsrSO5MKPljF-MNt712FRYkXEsfWhB7Ro1oXSiRkq5-Pi35e9lN5j8v6jxJzZwZqJR1G6ivPtsJrhIB53BFbzN1CrDiPtmEHE4pJ1r3dF9lSNSE7-OwFHdAYE4FPSl9qGL35JigB16dHAbnsuJWpLYYv3jjIIgoGEXflMYwOq0YfRd0zuKJvuFyFK8x0pYnDeevomErCOcn-dNFaOfiERg6ptd4VR_YaHANKEtu0ck" />
                  <div>
                    <div className="text-xs text-gray-400">United Kingdom</div>
                    <div className="font-mono">+44 77 2374 5646</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img alt="Algeria" className="mt-1 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC-IG7zy-qmiUxMeJKZzmRXlD1wbCkT3GqtFfHEvAhEr3DUZy4wJAAKFOPgJPu9CN_x5fvmtRS3SHq9LmEO9K2Vn0B41p8SLQlWud0ryuY4wGAYbV2B_Q3-GJQDLPQIfaCSAK5TPjv0NZbYyiMEhsFz6YZmidEpVrLNO4NNboxeljKcZOTi_xWXeBPwt9XptBiLgltTPbC-v7I-kFt0DUnk0vVidJyiZWh2Yakqol6yNgcG4tGxbpeT_QHxUf5aazkv13QSviFMcc" />
                  <div>
                    <div className="text-xs text-gray-400">Algeria</div>
                    <div className="font-mono">+33 7 57 59 22 41</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img alt="France" className="mt-1 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuqpU9IIQ9KyGL41vaPy6rnzoaDkraCOhQqj5ekUzSDacLUvNvkwmOuQLZqIf_z9X_yE-bluDYROQ01ryQavoa797SGM-tVm-t0L4hJCNo5wf0xH8eXFi61N0HYcQB-XaCOHhgUNUhl_PwLCKGXqruIwPdF1zFqwVdMDwyIDNc4MYt-unvQ98o5Op8iZ3JiXIvWmtnyquBhgYAl2JfLWGT3A5Xj-ygYqqy62SdegwwH011ZJbOSg8RpRFenGNsuyoJ9yHVsPVDjfU" />
                  <div>
                    <div className="text-xs text-gray-400">France</div>
                    <div className="font-mono">+33 6 44 64 57 17</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#2A4846]">
                  <a className="flex items-center gap-2 hover:text-white" href="mailto:info@theflex.global">
                    <i className="fa-regular fa-envelope"></i> info@theflex.global
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2A4846] pt-8 text-center text-sm text-gray-400">
            © 2025 The Flex. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-700 p-4 md:hidden z-40 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div>
          <span className="block text-gray-500 dark:text-gray-400 text-xs">Starting from</span>
          <span className="font-bold text-lg text-primary dark:text-white">$120 <span className="text-sm font-normal">/ night</span></span>
        </div>
        <button className="bg-primary text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-[#162e2c] transition">
          Check availability
        </button>
      </div>

      <a className="fixed bottom-24 md:bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center" href="#">
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default PropertyDetails;