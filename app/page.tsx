export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="flex items-center">
            <img
              src="/logo-selling.png"
              alt="Selling Methodologies | Instituto de Ventas"
              className="h-auto w-[190px] md:w-[230px]"
            />
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#15375c]"
          >
            Solicitar información
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[760px] items-center overflow-hidden bg-[#102d4d]">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#1c4b79] opacity-60 blur-3xl" />
        <div className="absolute -bottom-52 left-1/3 h-[500px] w-[500px] rounded-full bg-[#e58a2b] opacity-10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-36 lg:grid-cols-[1.15fr_.85fr] lg:px-8">

          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Formación Comercial · Online en vivo
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Profesionaliza
              <br />
              tu forma de{" "}
              <span className="text-[#f2a23a]">vender.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Una formación comercial diseñada para transformar la manera
              en que prospectas, negocias, generas confianza y desarrollas
              tu estrategia comercial.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Aprende junto a instructores internacionales y desarrolla
              herramientas aplicables a situaciones comerciales reales.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-[#f2a23a] px-7 py-4 text-sm font-bold text-[#102d4d] transition hover:-translate-y-0.5 hover:bg-[#ffb14a]"
              >
                QUIERO RECIBIR INFORMACIÓN
              </a>

              <a
                href="#formacion"
                className="rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Conocer la formación ↓
              </a>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="w-full max-w-md rounded-[30px] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a23a]">
                Próxima formación
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white">
                13 de noviembre
              </h2>

              <p className="mt-2 text-slate-300">
                Inicio de la formación
              </p>

              <div className="my-7 h-px bg-white/15" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-white">20</p>
                  <p className="mt-1 text-sm text-slate-300">Clases</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">40</p>
                  <p className="mt-1 text-sm text-slate-300">Horas</p>
                </div>

                <div>
                  <p className="text-lg font-bold text-white">Viernes</p>
                  <p className="mt-1 text-sm text-slate-300">Cada semana</p>
                </div>

                <div>
                  <p className="text-lg font-bold text-white">12–2 PM</p>
                  <p className="mt-1 text-sm text-slate-300">Hora CDMX</p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-medium text-white">
                  100% online en vivo
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-300">
                  Una sesión de 2 horas cada semana.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RESUMEN */}
      <section id="formacion" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d97b1d]">
              Formación Selling Methodologies®
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15375c] md:text-5xl">
              Más que aprender a vender.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Desarrolla una metodología comercial que conecta ventas,
              prospección, estrategia y ejecución para convertir tus acciones
              comerciales en un proceso estructurado.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["20", "Clases"],
              ["40", "Horas de formación"],
              ["2 h", "Por semana"],
              ["100%", "Online en vivo"],
            ].map(([numero, texto]) => (
              <div
                key={texto}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center"
              >
                <p className="text-4xl font-bold text-[#15375c]">
                  {numero}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {texto}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PILARES */}
      <section className="bg-[#f6f8fb] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d97b1d]">
              Nuestra metodología
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15375c] md:text-5xl">
              Metodología, estrategia y acción.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              La formación está diseñada para que no te quedes únicamente
              con conceptos. Aprenderás herramientas comerciales y las
              llevarás a la práctica para desarrollar una forma de vender
              más estructurada.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <div className="rounded-[32px] bg-[#15375c] p-9 text-white">
              <span className="text-sm font-bold text-[#f2a23a]">01</span>
              <h3 className="mt-5 text-2xl font-bold">
                El Diagrama del Vendedor
              </h3>
              <p className="mt-4 leading-7 text-slate-200">
                Aprende a trabajar sobre los elementos que sí puedes
                controlar como vendedor: fortaleza mental, estrategia
                comercial y las acciones que realizas todos los días.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-9">
              <span className="text-sm font-bold text-[#d97b1d]">02</span>
              <h3 className="mt-5 text-2xl font-bold text-[#15375c]">
                Estrategia Comercial
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Construye una estrategia que conecte las acciones del área
                comercial con objetivos, seguimiento e indicadores.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-9">
              <span className="text-sm font-bold text-[#d97b1d]">03</span>
              <h3 className="mt-5 text-2xl font-bold text-[#15375c]">
                Formatos preestablecidos
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Lleva la metodología a la operación utilizando formatos e
                indicadores de desempeño y resultados.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#e88b2c] p-9 text-white">
              <span className="text-sm font-bold text-white/70">04</span>
              <h3 className="mt-5 text-2xl font-bold">
                Prospección en acción
              </h3>
              <p className="mt-4 leading-7 text-orange-50">
                Conoce diferentes actividades de prospección y aprende a
                construir una mezcla de acciones comerciales que puedas
                ejecutar de forma constante.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RELOJ DE ARENA */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

          {/* IMAGEN */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[480px] overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-xl">
              <img
                src="/reloj-de-arena.png"
                alt="Metodología de Ventas El Reloj de Arena"
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d97b1d]">
              Metodología de ventas
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15375c] md:text-5xl">
              El Reloj de Arena
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Una metodología diseñada para generar
              <strong className="text-[#15375c]"> certeza y confianza </strong>
              durante todo el proceso de venta.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              El vendedor aprende a comprender al prospecto, identificar
              su motivador de compra y utilizar diferentes técnicas en
              cada etapa del proceso comercial.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Zona Cero",
                "Venta Inversa",
                "Influenciadores",
                "Propuesta",
                "Quinto Elemento",
                "Presupuesto",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#f6f8fb] px-4 py-3"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#f2a23a]" />
                  <span className="text-sm font-semibold text-[#15375c]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border-l-4 border-[#f2a23a] bg-[#15375c] p-5">
              <p className="font-semibold text-white">
                Certeza + Confianza
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Dos elementos presentes durante todo el proceso para
                fortalecer la relación comercial y facilitar la decisión
                de compra.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INSTRUCTORES */}
      <section className="overflow-hidden bg-[#0f2d4c] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f2a23a]">
              Una visión internacional
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Aprende de instructores internacionales.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Durante la formación tendrás sesiones impartidas por diferentes
              especialistas que aportan experiencia y conocimiento en
              distintas áreas del proceso comercial.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl">
            <img
              src="/instructores.png"
              alt="Instructores internacionales de Selling Methodologies"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Experiencia internacional"],
              ["02", "Estrategias comprobadas"],
              ["03", "Impacto real"],
              ["04", "Resultados extraordinarios"],
            ].map(([numero, texto]) => (
              <div
                key={texto}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-bold text-[#f2a23a]">
                  {numero}
                </p>

                <p className="mt-3 font-semibold text-white">
                  {texto}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TEMARIO */}
      <section className="bg-[#f6f8fb] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d97b1d]">
              Lo que aprenderás
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15375c] md:text-5xl">
              Una formación comercial integral.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A lo largo de 20 clases trabajarás diferentes áreas que
              intervienen en el desarrollo de vendedores, líderes y
              estrategias comerciales.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* VENTAS */}
            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#15375c] text-lg font-bold text-white">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#15375c] md:text-[26px]">
                Metodología de Ventas
              </h3>

              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600 md:text-lg">
                <li>• El Reloj de Arena</li>
                <li>• El Diagrama del Vendedor</li>
                <li>• Venta de valor</li>
                <li>• Tiempo del dinero</li>
                <li>• Conexión con el prospecto</li>
              </ul>
            </div>

            {/* PROSPECCIÓN */}
            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e88b2c] text-lg font-bold text-white">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#15375c] md:text-[26px]">
                Prospección
              </h3>

              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600 md:text-lg">
                <li>• Objetivos y metas de prospección</li>
                <li>• Llamadas telefónicas</li>
                <li>• Marca personal</li>
                <li>• Ejercicios prácticos de prospección</li>
              </ul>
            </div>

            {/* ESTRATEGIA */}
            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#15375c] text-lg font-bold text-white">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#15375c] md:text-[26px]">
                Estrategia Comercial
              </h3>

              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600 md:text-lg">
                <li>• Estrategia Comercial</li>
                <li>• Estrategia de Ventas</li>
                <li>• Las 4 Palancas de la Venta</li>
                <li>• Ciclo de Vida del Cliente</li>
              </ul>
            </div>

            {/* NEGOCIACIÓN */}
            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e88b2c] text-lg font-bold text-white">
                04
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#15375c] md:text-[26px]">
                Negociación
              </h3>

              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600 md:text-lg">
                <li>• Negociación Avanzada</li>
                <li>• Límites mentales a tu venta</li>
                <li>• Manejo del cambio</li>
                <li>• Venta a través del Método del Caso</li>
              </ul>
            </div>

            {/* LIDERAZGO */}
            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#15375c] text-lg font-bold text-white">
                05
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#15375c] md:text-[26px]">
                Liderazgo Comercial
              </h3>

              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600 md:text-lg">
                <li>• Liderazgo en las Ventas</li>
                <li>• Cómo detectar a un buen vendedor</li>
                <li>• KPIs y OKRs</li>
                <li>• Formatos preestablecidos</li>
              </ul>
            </div>

            {/* INNOVACIÓN */}
            <div className="group rounded-[30px] bg-[#15375c] p-8 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2a23a] text-lg font-bold text-[#15375c]">
                06
              </div>

              <h3 className="mt-6 text-2xl font-bold md:text-[26px]">
                Innovación en Ventas
              </h3>

              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-200 md:text-lg">
                <li>• Inteligencia Artificial en las Ventas</li>
                <li>• Nuevas herramientas comerciales</li>
                <li>• Adaptación a nuevos entornos de venta</li>
              </ul>
            </div>

          </div>

          <p className="mt-10 text-center text-sm leading-6 text-slate-500 md:text-base">
            Los temas pueden cambiar en cronología y otorgamiento según
            el desarrollo de la formación.
          </p>

        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

            {/* TEXTO */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d97b1d]">
                ¿Para quién es?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#15375c] md:text-5xl">
                Para quienes quieren llevar sus ventas a otro nivel.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Una formación diseñada para profesionales que participan
                directamente en el crecimiento comercial de una empresa,
                lideran equipos o buscan profesionalizar su manera de vender.
              </p>

              <div className="mt-8 rounded-[28px] bg-[#15375c] p-7">
                <p className="text-xl font-bold text-white">
                  No importa únicamente qué vendes.
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  Lo importante es desarrollar una metodología que te permita
                  prospectar, generar confianza, negociar y ejecutar una
                  estrategia comercial de forma estructurada.
                </p>
              </div>
            </div>

            {/* PERFILES */}
            <div className="grid gap-4 sm:grid-cols-2">

              {[
                ["01", "Directores Generales"],
                ["02", "Directores Comerciales"],
                ["03", "Dueños de Negocios"],
                ["04", "Emprendedores"],
                ["05", "Gerentes de Ventas"],
                ["06", "Vendedores"],
                ["07", "PyMES"],
                ["08", "Equipos Comerciales"],
              ].map(([numero, perfil]) => (
                <div
                  key={perfil}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f2a23a] hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#15375c] text-sm font-bold text-white transition group-hover:bg-[#f2a23a] group-hover:text-[#15375c]">
                    {numero}
                  </div>

                  <p className="text-base font-bold text-[#15375c] md:text-lg">
                    {perfil}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="relative overflow-hidden bg-[#102d4d] py-28"
      >
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#245886] opacity-40 blur-3xl" />
        <div className="absolute -bottom-60 left-1/4 h-[500px] w-[500px] rounded-full bg-[#f2a23a] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f2a23a]">
            Próxima formación · 13 de noviembre
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Profesionaliza tu forma de vender.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            20 clases. 40 horas. Instructores internacionales.
            Una metodología diseñada para transformar tu manera de vender.
          </p>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {[
              "20 clases",
              "40 horas",
              "Viernes",
              "12:00 – 14:00 CDMX",
              "Online en vivo",
            ].map((dato) => (
              <span
                key={dato}
                className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white"
              >
                {dato}
              </span>
            ))}
          </div>

          <a
            href="https://wa.me/529994428950?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20Formaci%C3%B3n%20en%20Ventas%20que%20inicia%20el%2013%20de%20noviembre."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#f2a23a] px-9 py-4 text-base font-bold text-[#102d4d] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ffb44d]"
          >
            QUIERO RECIBIR INFORMACIÓN
          </a>

          <p className="mt-5 text-sm text-slate-400">
            Solicita información directamente por WhatsApp.
          </p>

        </div>
      </section>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/529994428950?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20Formaci%C3%B3n%20en%20Ventas%20que%20inicia%20el%2013%20de%20noviembre."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar información por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.35c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.97 2.62 1.11 2.8c.14.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z"/>
          <path d="M16.03 3.2c-7.08 0-12.84 5.72-12.84 12.76 0 2.25.59 4.45 1.71 6.38L3.08 29l6.84-1.79a12.9 12.9 0 0 0 6.11 1.55h.01c7.08 0 12.84-5.72 12.84-12.76S23.12 3.2 16.03 3.2zm0 23.4h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.06 1.06 1.08-3.94-.26-.4a10.56 10.56 0 0 1-1.63-5.64c0-5.87 4.81-10.64 10.72-10.64 5.91 0 10.72 4.77 10.72 10.64S21.94 26.6 16.03 26.6z"/>
        </svg>
      </a>

    </main>
  );
}
