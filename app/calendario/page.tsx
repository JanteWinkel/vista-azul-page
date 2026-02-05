"use client";

import EventSchedule from "./calendario_components/eventos";
import Footer from "@/components/footer";
import Calendario from "./calendario_components/calendario";



const EventCalendar = () => {
  
  return (
    <div>
      <EventSchedule />
      <div>
        <Calendario />
        
      </div>
      <Footer />
    </div>
  );
};

export default EventCalendar;
