"use client";

import Footer from "@/components/footer";
import BannerHorarios from "./components/banner_horarios";
import Horarios from "./components/horarios";
import { PageIntro } from "@/components/va-ui";

const ScheduleComponent = () => {
  return (
    <div>
      <BannerHorarios />
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        <PageIntro>
          Consulta aquí los horarios de uso para las áreas comunes y actividades del condominio. Es importante respetar las normas y horarios establecidos para un mejor funcionamiento del condominio.
        </PageIntro>
        <Horarios />
      </div>
      <Footer />
    </div>
  );
};

export default ScheduleComponent;
