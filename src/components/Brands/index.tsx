"use client";
import { Brand } from "@/types/brand";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useState } from "react";
import { SERVICIO } from "@/app/constantes";
import axios from "axios";
import ErrorSection from "../Common/errorSection";

const Brands = () => {
  const [brandsData, setBrandsData] = useState<Brand[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await axios.get(`${SERVICIO}/patrocinadores`);
        setBrandsData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setError("No se pudieron cargar los datos.");
      }
    };

    fetchProgramas();
  }, []);
  if (error) {
    return (
      <>
        <ErrorSection titulo="Nuestros patrocinadores" />
      </>
    );
  }
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTitle
          title="Nuestros patrocinadores"
          paragraph=""
          center
          mb="80px"
        />
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[40px] 2xl:px-[50px] 2xl:py-[40px]">
              {brandsData.map((brand, index) => (
                <SingleBrand key={index} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { nombre, logo, href } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-2 py-[5px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-[100px] w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <img
          src={logo}
          alt={nombre}
          className="hidden dark:block  h-full object-cover"
        />
        <img src={logo} alt={nombre} className="block dark:hidden  h-full object-cover" />
      </a>
    </div>
  );
};
