import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function RegistroEmpresa() {
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarRegistro = async () => {
    setMensaje("Procesando...");

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setMensaje("❌ Error: " + authError.message);
      return;
    }

    const userId = authData.user?.id;

    const { data: empresaData, error: empresaError } = await supabase
      .from("empresas")
      .insert([{ nombre: empresa, correo_admin: email }])
      .select()
      .single();

    if (empresaError) {
      setMensaje("❌ Error al crear empresa: " + empresaError.message);
      return;
    }

    const { error: usuarioError } = await supabase.from("usuarios").insert([
      {
        id: userId,
        nombre: empresa + " (admin)",
        email,
        empresa_id: empresaData.id,
        rol: "admin",
      },
    ]);

    if (usuarioError) {
      setMensaje("❌ Error al crear usuario: " + usuarioError.message);
      return;
    }

    setMensaje("✅ Registro exitoso. Revisa tu correo para confirmar la cuenta.");
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>Registro de Empresa</h2>
      <input
        placeholder="Nombre empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={manejarRegistro} style={{ width: "100%" }}>
        Registrar Empresa
      </button>
      <p style={{ marginTop: 10 }}>{mensaje}</p>
    </div>
  );
}
