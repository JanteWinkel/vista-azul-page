'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { supabase } from '../../../../lib/supabaseClient';
import { useUser } from '@clerk/nextjs';

const CardPropiedad = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [propietarioData, setPropietarioData] = useState(null);
  const [inmuebleData, setInmuebleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: propietarioData, error: propietarioError } = await supabase
          .from('propietarios')
          .select('id, nombre, apellido, telefono, email, inmueble')
          .eq('email', user?.primaryEmailAddress?.emailAddress);

        if (propietarioError || propietarioData.length === 0) {
          throw new Error('Error al obtener el propietario o propietario no encontrado');
        }

 
        const inmuebleId = propietarioData[0].inmueble

        const { data: inmuebleData, error: inmuebleError } = await supabase
          .from('estado_de_cuenta')
          .select('deudausd, Inmueble')
          .eq('Inmueble', inmuebleId);

        if (inmuebleError ||inmuebleData.length === 0) {
          throw new Error('Error al obtener la propiedad o propiedad no encontrada');
        }


        setPropietarioData({
          nombre: propietarioData[0].nombre,
          apellido: propietarioData[0].apellido,
          telefono: propietarioData[0].telefono,
          email: propietarioData[0].email,
        });

        setInmuebleData({
          inmueble: inmuebleData[0].Inmueble,
          deudausd: inmuebleData[0].deudausd
        })

      } catch (error) {
        console.error('Error al obtener los datos:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  if (!inmuebleData || !propietarioData) return <p className="text-foreground">No se encontraron datos</p>;

  return (
    <Card className="w-full max-w-4xl mx-auto my-8 bg-card shadow-lg rounded-xl sm:w-11/12">
      <CardHeader className="bg-muted rounded-t-xl">
        <CardTitle className="text-primary">Información del Propietario y Propiedad</CardTitle>
        <CardDescription className="text-muted-foreground">Detalles sobre el propietario, propiedad y deuda</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 md:border-r md:border-border">
            <h3 className="text-primary font-semibold mb-2">Datos del Propietario:</h3>
            <p className="mb-2"><strong className="text-secondary-foreground">Nombre:</strong> <span className="text-foreground">{propietarioData.nombre} {propietarioData.apellido}</span></p>
            <p className="mb-2"><strong className="text-secondary-foreground">Deuda USD:</strong> <span className="text-foreground">{inmuebleData.deudausd}</span></p>
            <p className="mb-2"><strong className="text-secondary-foreground">Inmueble:</strong> <span className="text-foreground">{inmuebleData.inmueble}</span></p>
            <p className="mb-2"><strong className="text-secondary-foreground">Correo:</strong> <span className="text-foreground">{propietarioData.email}</span></p>
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPropiedad;
