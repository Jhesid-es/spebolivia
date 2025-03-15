interface ErrorSectionType {
  titulo: string;
}

function ErrorSection({ titulo }: ErrorSectionType) {
  return (
    <>
      <section className="pt-16">
        <div className="container">
          <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Lo sentimos esta sección de {`${titulo}`} no puede ser encontrada
          </h3>
          <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Vuelva a cargar la pagina y si no se arregla comuniquese con el
            propietario.
          </p>
        </div>{" "}
      </section>
    </>
  );
}
export default ErrorSection;
