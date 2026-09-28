"use client";

import Footer from "@/components/footer";
import SuggestionsComponent from "./components/boton_sugerencia";
import BannerContactos from "./components/banner_contactos";
import Listado from "./components/listado";
import { PageIntro } from "@/components/va-ui";


const ContactComponent = () => {
  return (
    <div>
      <BannerContactos />
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        <PageIntro>
          Aquí encontrarás los contactos clave del condominio: Junta, administración, garita, servicios públicos esenciales y el Buzón de Sugerencias. Por favor, respeta los horarios y canales establecidos.
        </PageIntro>
        <Listado />
        <SuggestionsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ContactComponent;
