"use client";
import { Feature } from "@/types/feature";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVICIO } from "@/app/constantes";


const Features = () => {
  const [programas, setProgramas] = useState<Feature[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await axios.get(`${SERVICIO}/programas`);
        setProgramas(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setError("No se pudieron cargar los datos.");
      }
    };

    fetchProgramas();
  }, []);
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Programas"
            paragraph="Nuestros programas como SPE Sección Bolivia:"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {programas
              ? programas.map((programa, index) => (
                  <SingleFeature key={index} feature={programa} />
                ))
              : ""}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
