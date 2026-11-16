import type { NextConfig } from "next";

// Détection fiable de l'environnement avec Turbopack (Next.js 16)
const isDev = process.env.NODE_ENV === "development";
const isBuild = process.env.NODE_ENV === "production";

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  // Import dynamique pour ne pas bloquer le chargement de la config
  import("velite").then((m) =>
    m.build({ watch: isDev, clean: !isDev })
  );
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
};

export default nextConfig;