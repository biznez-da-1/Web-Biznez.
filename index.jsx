import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ArtistWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="h-screen flex flex-col justify-center items-center text-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-4 tracking-tighter"
        >
          BIZNEZ-DA-1
        </motion.h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl uppercase tracking-widest mb-8">
          Rap • Trap • Biznez On Da Beat
        </p>
        <div className="flex gap-4">
          <Button className="bg-white text-black hover:bg-zinc-200 px-8">Escuchar</Button>
          <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 px-8">Contacto</Button>
        </div>
      </section>

      <section className="px-6 py-24 max-w-4xl mx-auto text-center border-t border-zinc-900">
        <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter text-red-600">Sobre la Mentalidad</h2>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Más que música, es disciplina. Desde la producción en <span className="text-white italic">Biznez On Da Beat</span> hasta el micro, cada barra es un reflejo de resiliencia y trabajo duro.
        </p>
      </section>

      <section className="px-6 py-20 bg-zinc-950">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">Featured Tracks</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Mentalidad Elevada", "Luz Verde", "Modo Avion"].map((track, i) => (
            <Card key={i} className="bg-black border border-zinc-800 hover:border-red-600 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="h-1 bg-red-600 mb-6 w-0 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-2xl font-bold mb-2">{track}</h3>
                <p className="text-zinc-500 mb-6 text-sm">Biznez On Da Beat Production</p>
                <Button variant="link" className="p-0 text-red-600 font-bold">PLAY ON RAP FAME</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900 text-center">
        <div className="flex justify-center gap-8 mb-8 text-zinc-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">YOUTUBE</a>
          <a href="#" className="hover:text-white transition-colors">RAP FAME</a>
          <a href="#" className="hover:text-white transition-colors">LINKTREE</a>
        </div>
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} BIZNEZ-DA-1 | ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}
