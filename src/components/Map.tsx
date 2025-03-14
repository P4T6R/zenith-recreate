
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

const Map = ({ center = [-1.65, 12.37], zoom = 13 }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mapboxToken) {
      setShowTokenInput(false);
      initializeMap();
    }
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: center,
      zoom: zoom,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add a marker for the office location
    new mapboxgl.Marker({ color: '#c4392a' })
      .setLngLat(center)
      .addTo(map.current);

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-zenith-black">Activer la carte interactive</h3>
        <p className="text-zenith-darkgray mb-6 text-center">
          Pour afficher la carte, veuillez entrer votre token public Mapbox.<br />
          Vous pouvez en obtenir un gratuitement sur <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-zenith-red hover:underline">mapbox.com</a>
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
          <div className="flex">
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Entrez votre token public Mapbox"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-zenith-red/30"
            />
            <button 
              type="submit" 
              className="bg-zenith-red hover:bg-zenith-darkred text-white px-4 py-2 rounded-r-lg transition-colors"
            >
              Afficher
            </button>
          </div>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div ref={mapContainer} className="absolute inset-0" />
    </motion.div>
  );
};

export default Map;
