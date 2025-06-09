import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Control Horario Legal</h1>
        <p className="text-lg mt-2">Cumple la normativa española fácilmente</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Plan Básico</h2>
          <p>Control horario para 1 empresa y hasta 10 empleados.</p>
          <p className="text-xl mt-4 font-bold">29€/mes</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow border-2 border-blue-600">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Plan Pro</h2>
          <p>Control por obra, informes avanzados, ilimitado.</p>
          <p className="text-xl mt-4 font-bold text-blue-700">79€/mes</p>
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Opiniones de usuarios</h2>
        <blockquote className="italic">
          “Fácil de usar y cumple con todo lo que exige la ley. Perfecto para obras y empresas pequeñas.”<br />
          <span className="font-bold">– Marta G.</span>
        </blockquote>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2">¿Tienes dudas?</h2>
        <p>Llámanos o escríbenos por WhatsApp</p>
        <a
          href="https://wa.me/34625667812"
          className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-2xl text-lg shadow"
          target="_blank"
        >
          📲 Contactar por WhatsApp
        </a>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Control Horario Legal
      </footer>
    </div>
  );
}
