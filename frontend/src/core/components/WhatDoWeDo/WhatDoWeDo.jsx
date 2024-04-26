import "../WhatDoWeDo/WhatDoWeDo.css";

export const WhatDoWeDo = () => {
  return (
    <section className="whatdowedo-container">
      <h1 className="title" id="seccion-what">QUE HACEMOS</h1>
      <div className="blue-container">
        <div className="whatdo-text">
          <h3 className="whatdo-title">
            Democratizar la IA en todos los estamentos de la sociedad asturiana
            de diversas formas
          </h3>
          <ul>
            <li>
              Divulgar la IA a través de webinars y podcasts en relación a los
              temas candentes, realizados si o ser posible por especialistas
              asturianos.
            </li>
            <li>Identificar temas y personas que podrían explicarlos.</li>
            <li>
              Identificar el formato que más consume nuestra población objetivo.
            </li>
          </ul>
          <h3 className="whatdo-title">Formaciones personalizadas</h3>
          <ul>
            <li>
              Se harán formaciones personalizadas a diferentes grupos de interés
              por sectores (abogados, pymes), para darles únicamente lo que
              necesiten en su día a día.
            </li>
            <li>
              Identificar el primer sector con el que vamos a trabajar en base a
              su potencial interés, impacto de la IA en su día a día y el
              posible rendimiento que la asociación podría tener (tanto
              económico como de relevancia).
            </li>
            <li>
              Identificar formato y duración de las formaciones en base a las
              preferencias del grupo objetivo.
            </li>
            <li>
              Crear plan de márketing para llegar a esos grupos de manera
              eficiente.
            </li>
          </ul>
          <h3 className="whatdo-title">Para estudiantes</h3>
          <ul>
            <li>
              Darles las herramientas que las empresas realmente demandan (no es
              novedoso que las job descriptions requieren de herramientas
              necesarias que no se está dando en las universidades o fps).
            </li>
            <li>
              Herramientas y darles una lista de formaciones en línea que
              consideremos interesantes en base a su perfil. Nosotros haríamos
              el filtrado y la clasificación de los cursos.
            </li>
            <li>
              Reuniones mensuales peer to peer para que los alumnos puedan
              resolver sus dudas.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};