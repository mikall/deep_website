"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

// Parametri configurabili
const MIN_TRAINS = 12;            // numero minimo di treni visibili
const MAX_TRAINS = 15;           // numero massimo di treni visibili
const MIN_SQUARES_PER_TRAIN = 5; // numero minimo di quadratini per treno
const MAX_SQUARES_PER_TRAIN = 15; // numero massimo di quadratini per treno
const MIN_SQUARE_SIZE = 10;       // dimensione minima dei quadratini (px)
const MAX_SQUARE_SIZE = 22;      // dimensione massima dei quadratini (px)
const MIN_SPEED = 1;           // velocità minima di movimento
const MAX_SPEED = 4;             // velocità massima di movimento
const MIN_SPACING = 4;           // spazio minimo tra i quadratini
const MAX_SPACING = 16;          // spazio massimo tra i quadratini
const GENERATION_INTERVAL = 5000; // intervallo di generazione di nuovi treni (ms)
const UP_DIRECTION_PROBABILITY = 0.5; // probabilità che un treno si muova verso l'alto (40%)

// Palette di colori
const PURPLE_COLORS = [
  "rgba(168, 85, 247, 0.8)",   // purple-500
  "rgba(192, 132, 252, 0.8)",  // purple-400
  "rgba(216, 180, 254, 0.7)",  // purple-300
  "rgba(139, 92, 246, 0.8)",   // purple-600
];

const GRAY_COLORS = [
  "rgba(107, 114, 128, 0.7)",  // gray-500
  "rgba(75, 85, 99, 0.7)",     // gray-600
  "rgba(55, 65, 81, 0.7)",     // gray-700
  "rgba(31, 41, 55, 0.7)",     // gray-800
];

// Struttura di un quadratino
interface Square {
  size: number;
  color: string;
}

// Struttura di un treno di quadratini
interface SquareTrain {
  id: number;
  x: number;
  y: number;
  speed: number;
  squares: Square[];
  spacing: number;
  direction: 'up' | 'down'; // direzione del movimento
}

interface SquaresAnimationProps {
  minTrains?: number;
  maxTrains?: number;
  minSpeed?: number;
  maxSpeed?: number;
  generationInterval?: number;
  className?: string;
}

const SquaresAnimation: React.FC<SquaresAnimationProps> = ({
  minTrains = MIN_TRAINS,
  maxTrains = MAX_TRAINS,
  minSpeed = MIN_SPEED,
  maxSpeed = MAX_SPEED,
  generationInterval = GENERATION_INTERVAL,
  className = ""
}) => {
  // Stato per i treni di quadratini
  const [trains, setTrains] = useState<SquareTrain[]>([]);
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const nextTrainIdRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Stato per la visibilità della pagina
  const [isPageVisible, setIsPageVisible] = useState<boolean>(true);
  
  // Funzione per generare un colore casuale
  const getRandomColor = useCallback(() => {
    const isPurple = Math.random() > 0.4; // 60% probabilità di viola
    const colorArray = isPurple ? PURPLE_COLORS : GRAY_COLORS;
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }, []);
  
  // Funzione per generare una variazione di colore
  const getColorVariation = useCallback((baseColor: string) => {
    const rgbaMatch = baseColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      const a = parseFloat(rgbaMatch[4]);
      
      const variation = 20;
      const rVar = Math.max(0, Math.min(255, r + Math.floor(Math.random() * variation * 2) - variation));
      const gVar = Math.max(0, Math.min(255, g + Math.floor(Math.random() * variation * 2) - variation));
      const bVar = Math.max(0, Math.min(255, b + Math.floor(Math.random() * variation * 2) - variation));
      
      return `rgba(${rVar}, ${gVar}, ${bVar}, ${a})`;
    }
    return baseColor;
  }, []);
  
  // Funzione per creare un nuovo treno di quadratini
  const createNewTrain = useCallback(() => {
    if (!containerRef.current) return null;
    
    const { width } = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight * 3;
    
    // Posizione X randomica
    const x = Math.random() * (width - 100) + 50; // Mantiene distanza dai bordi
    
    // Numero di quadratini nel treno (tra MIN e MAX)
    const squareCount = Math.floor(Math.random() * (MAX_SQUARES_PER_TRAIN - MIN_SQUARES_PER_TRAIN + 1)) + MIN_SQUARES_PER_TRAIN;
    
    // Dimensione dei quadratini (tra MIN e MAX)
    const squareSize = Math.floor(Math.random() * (MAX_SQUARE_SIZE - MIN_SQUARE_SIZE + 1)) + MIN_SQUARE_SIZE;
    
    // Velocità (tra minSpeed e maxSpeed)
    const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    
    // Spazio tra i quadratini (tra MIN e MAX)
    const spacing = Math.floor(Math.random() * (MAX_SPACING - MIN_SPACING + 1)) + MIN_SPACING;
    
    // Direzione (su o giù)
    const direction: 'up' | 'down' = Math.random() < UP_DIRECTION_PROBABILITY ? 'up' : 'down';
    
    // Colore base del treno
    const baseColor = getRandomColor();
    
    // Crea array di quadratini con variazioni di colore
    const squares: Square[] = [];
    for (let i = 0; i < squareCount; i++) {
      squares.push({
        size: squareSize,
        color: getColorVariation(baseColor)
      });
    }
    
    // Posizione Y iniziale basata sulla direzione
    const totalTrainHeight = squareSize * squareCount + spacing * (squareCount - 1);
    const y = direction === 'down' 
      ? -totalTrainHeight // Sopra lo schermo per i treni che scendono
      : windowHeight;     // Sotto lo schermo per i treni che salgono
    
    // Crea il treno
    return {
      id: nextTrainIdRef.current++,
      x,
      y,
      speed,
      squares,
      spacing,
      direction
    };
  }, [getRandomColor, getColorVariation, minSpeed, maxSpeed]);
  
  // Inizializza le dimensioni
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight * 3;
        setDimensions({ width, height: windowHeight });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Gestisce i cambiamenti di visibilità della pagina
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  // Assicura che ci sia sempre il numero minimo di treni
  const ensureMinTrains = useCallback(() => {
    if (dimensions.width === 0 || !isPageVisible) return;
    
    setTrains(prevTrains => {
      if (prevTrains.length >= minTrains) return prevTrains;
      
      const newTrains: SquareTrain[] = [];
      const trainsToAdd = minTrains - prevTrains.length;
      
      for (let i = 0; i < trainsToAdd; i++) {
        const newTrain = createNewTrain();
        if (newTrain) newTrains.push(newTrain);
      }
      
      return [...prevTrains, ...newTrains];
    });
  }, [dimensions.width, isPageVisible, minTrains, createNewTrain]);
  
  // Genera nuovi treni casualmente
  const generateRandomTrains = useCallback(() => {
    if (dimensions.width === 0 || !isPageVisible) return;
    
    setTrains(prevTrains => {
      if (prevTrains.length >= maxTrains) return prevTrains;
      
      const availableSlots = maxTrains - prevTrains.length;
      if (availableSlots <= 0) return prevTrains;
      
      // Genera un numero casuale di treni da aggiungere
      const trainCount = Math.min(
        Math.floor(Math.random() * 3) + 1, // 1-3 treni alla volta
        availableSlots
      );
      
      const newTrains: SquareTrain[] = [];
      
      for (let i = 0; i < trainCount; i++) {
        const newTrain = createNewTrain();
        if (newTrain) newTrains.push(newTrain);
      }
      
      return [...prevTrains, ...newTrains];
    });
  }, [dimensions.width, isPageVisible, maxTrains, createNewTrain]);
  
  // Ref per il timestamp dell'ultimo frame
  const lastTimeRef = useRef<number>(0);
  
  // Ciclo di animazione
  const animate = useCallback((timestamp: number) => {
    // Se è il primo frame, inizializza il timestamp
    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp;
    }
    
    // Calcola il delta time (in secondi)
    const deltaTime = (timestamp - lastTimeRef.current) / 1000;
    lastTimeRef.current = timestamp;
    
    // Limita il deltaTime per evitare salti troppo grandi
    // (ad esempio quando la scheda del browser è inattiva)
    const cappedDeltaTime = Math.min(deltaTime, 0.1);
    
    setTrains(prevTrains => {
      // Aggiorna la posizione di ogni treno in base alla direzione
      // Moltiplica la velocità per il deltaTime per ottenere un movimento costante
      const updatedTrains = prevTrains.map(train => ({
        ...train,
        y: train.direction === 'down' 
          ? train.y + (train.speed * 60 * cappedDeltaTime)  // Muovi verso il basso
          : train.y - (train.speed * 60 * cappedDeltaTime)  // Muovi verso l'alto
      }));
      
      // Rimuovi i treni che sono usciti dallo schermo
      return updatedTrains.filter(train => {
        const totalTrainHeight = train.squares.length * train.squares[0].size + 
                                (train.squares.length - 1) * train.spacing;
        
        if (train.direction === 'down') {
          // Per i treni che scendono, rimuovi quando sono completamente sotto lo schermo
          return train.y < dimensions.height;
        } else {
          // Per i treni che salgono, rimuovi quando sono completamente sopra lo schermo
          return train.y + totalTrainHeight > 0;
        }
      });
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [dimensions.height]);
  
  // Inizializza l'animazione
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    // Assicura il numero minimo di treni all'inizio
    ensureMinTrains();
    
    // Avvia l'animazione
    animationRef.current = requestAnimationFrame(animate);
    
    // Avvia il timer per generare nuovi treni
    if (isPageVisible) {
      timerRef.current = setInterval(() => {
        ensureMinTrains();
        generateRandomTrains();
      }, generationInterval);
    }
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [dimensions, generationInterval, isPageVisible, ensureMinTrains, generateRandomTrains, animate]);
  
  // Gestisce i cambiamenti di visibilità
  useEffect(() => {
    if (isPageVisible) {
      // Quando la pagina diventa visibile, riavvia l'animazione
      ensureMinTrains();
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      timerRef.current = setInterval(() => {
        ensureMinTrains();
        generateRandomTrains();
      }, generationInterval);
      
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Quando la pagina non è visibile, ferma l'animazione
      cancelAnimationFrame(animationRef.current);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPageVisible, generationInterval, ensureMinTrains, generateRandomTrains, animate]);
  
  // Renderizza i treni di quadratini
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-1 ${className}`}
    >
      {trains.map(train => (
        // Renderizza ogni quadratino del treno
        train.squares.map((square, index) => {
          // Calcola la posizione Y in base alla direzione
          const offsetY = index * (square.size + train.spacing);
          const positionY = train.direction === 'down'
            ? train.y + offsetY  // Per i treni che scendono, aggiungi l'offset
            : train.y - offsetY; // Per i treni che salgono, sottrai l'offset
            
          return (
            <div
              key={`${train.id}-${index}`}
              className="absolute"
              style={{
                left: `${train.x}px`,
                top: `${positionY}px`,
                width: `${square.size}px`,
                height: `${square.size}px`,
                backgroundColor: square.color,
              }}
            />
          );
        })
      ))}
    </div>
  );
};

export default SquaresAnimation;
