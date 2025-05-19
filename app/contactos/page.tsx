"use client";

import Footer from "@/components/footer";
import SuggestionsComponent from "./components/boton_sugerencia";
import BannerContactos from "./components/banner_contactos";
import Listado from "./components/listado";


const ContactComponent = () => {
  return (
    <div>
      <BannerContactos />
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto pt-6 ">
        <p className=" text-justify">Aquí encontrarás los contactos clave del condominio: Junta, administración, garita, servicios públicos esenciales y el Buzón de Sugerencias. Por favor, respeta los horarios y canales establecidos.</p>
          
        <Listado />
        <div className="justify-center items-center ">
            <SuggestionsComponent />
          </div>
        <hr className="my-8 border-t border-gray-300 w-full" />
      </div>
      <Footer />
    </div>
  );
};

export default ContactComponent;
