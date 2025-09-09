"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const InfoBox: React.FC = () => {
  return (
    <Card className="bg-black text-gray-200 border-0 h-full">
      <CardContent className="overflow-hidden flex flex-col p-0">
        <div className="p-0">
          <h4 className="text-body-sm font-semibold mb-2 mt-6">Demo Motore di Previsione Comportamentale</h4>
          
          {/* Legend */}
          <div className="mb-2">
            <div className="flex items-center space-x-4 text-body-sm text-gray-300 mb-1">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-600 mr-1"></div>
                <span>Uscite</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary mr-1"></div>
                <span>Entrate</span>
              </div>
            </div>
            <p className="text-caption text-gray-400">Le variazioni di colore indicano diverse categorie</p>
          </div>
          
          {/* Bullet points */}
          <div className="space-y-2 text-body-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
              </div>
              <span className="text-gray-300">Scopri come il nostro motore di previsione comportamentale analizza i pattern finanziari per fornire insights personalizzati.</span>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
              </div>
              <span className="text-gray-300">Vedi come questi insights beneficiano sia i singoli che cercano guida finanziaria che le istituzioni che vogliono migliorare le relazioni con i clienti.</span>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
              </div>
              <span className="text-gray-300">Seleziona diversi periodi temporali per esplorare vari scenari di previsione comportamentale.</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
