/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/footer";
import BannerHorarios from "./components/banner_horarios";
import Horarios from "./components/horarios";

const ScheduleComponent = () => {
  return (
    <div>
      <BannerHorarios />
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6 ">
        <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-300 dark:border-blue-600 p-4 mb-6">
          <p className=" text-justify">Consulta aquí los horarios de uso para las áreas comunes y actividades del condominio. Es importante respetar las normas y horarios establecidos para un mejor funcionamiento del condominio.</p>
        </div>
        <Horarios />
        <hr className="my-8 mt-4 border-t border-gray-300 w-full" />
      </div>
      <Footer />
    </div>
  );
};

export default ScheduleComponent;
