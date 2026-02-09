"use client";

import EventSchedule from "./calendario_components/eventos";
import Footer from "@/components/footer";
import Calendario from "./calendario_components/calendario";
import ReligiousHolidays from "./calendario_components/eventos_religiosos";



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
