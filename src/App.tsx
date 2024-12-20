import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import BackgroundLogo from './components/BackgroundLogo';
import Header from './components/Header';
import NextShow from './components/NextShow';
import AudioPlayer from './components/AudioPlayer';
import ContactForm from './components/ContactForm';
import ProfileSection from './components/ProfileSection';
import { createShowDate, generateGoogleCalendarLink } from './utils/calendar';

function App() {
  const [showContact, setShowContact] = useState(false);
  
  // Create dates directly in UTC/GMT
  const nextShowDate = createShowDate(2025, 0, 19, 15); // 15:00 GMT, January 19th 2025
  const endTime = createShowDate(2025, 0, 19, 17);      // 17:00 GMT, January 19th 2025
  
  const addToCalendar = () => {
    const calendarUrl = generateGoogleCalendarLink({
      title: 'glimpse.london on Music Box Radio',
      startDate: nextShowDate,
      endDate: endTime,
      description: 'Tune in to glimpse.london house & techno show on Music Box Radio\n\nListen live at: https://www.musicboxradio.co.uk/#/schedule',
      location: 'https://www.musicboxradio.co.uk/#/schedule'
    });

    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen text-white relative">
      <ParticleBackground />
      <div className="relative z-10 container mx-auto px-8 py-12 max-w-4xl">
        <Header />
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="w-full md:w-1/2">
            <AudioPlayer />
          </div>
          <div className="w-full md:w-1/2">
            <NextShow 
              showDate={nextShowDate} 
              onAddToCalendar={addToCalendar} 
              onContactClick={() => setShowContact(true)} 
            />
          </div>
        </div>
        <ProfileSection />
      </div>
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      <BackgroundLogo />
    </div>
  );
}

export default App;