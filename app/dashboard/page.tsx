'use client'

import React from 'react'
import CardPropiedad from '../components/containers/cards/card-isSigned'
import { useUser } from '@clerk/nextjs'

function Page() {
  const { isSignedIn } = useUser()

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold text-primary mb-4 text-center">
          Bienvenido a tu Perfil
      </h1>
      <p className="text-lg text-blue-600"> </p>
      {isSignedIn ?
        <CardPropiedad /> :
        <p>Inicie sesión para ver sus datos</p>
      }
    </div>
  )
}

export default Page