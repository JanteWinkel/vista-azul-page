"use client";

import EventSchedule from "./calendario_components/eventos";
import Footer from "@/components/footer";
import ReligiousHolidays from "./calendario_components/eventos_religiosos";
import Calendario from "./calendario_components/calendario";



const EventCalendar = () => {
  
  return (
    <div>
      <EventSchedule />
      <ReligiousHolidays />
      <div>
        <Calendario />
        
      </div>
      <Footer />
    </div>
  );
};

export default EventCalendar;
