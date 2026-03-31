import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Zap, Database, Cpu } from 'lucide-react';

export default function GlobeVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [labelPos, setLabelPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let globeGroup: THREE.Group, hubsGroup: THREE.Group;
    let particles: THREE.Points;
    let mouse = new THREE.Vector2();
    let raycaster = new THREE.Raycaster();
    
    let targetRotation = new THREE.Vector2(0.25, 5.30);
    let currentRotation = new THREE.Vector2(0.25, 5.30);
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const GLOBE_RADIUS = 115;
    const DOT_COUNT = 25000;
    const AUTO_ROT_SPEED = 0.001;

    const cities = [
      { name: "Ouagadougou (Burkina Faso)", lat: 12.3714, lon: -1.5197 },
      { name: "Bobo-Dioulasso", lat: 11.1771, lon: -4.2979 },
      { name: "Dakar", lat: 14.7167, lon: -17.4677 },
      { name: "Bamako", lat: 12.6392, lon: -8.0029 },
      { name: "Abidjan", lat: 5.3600, lon: -4.0083 },
      { name: "Niamey", lat: 13.5116, lon: 2.1254 },
      { name: "Lomé", lat: 6.1375, lon: 1.2123 },
      { name: "Cotonou", lat: 6.3654, lon: 2.4183 },
      { name: "Accra", lat: 5.6037, lon: -0.1870 },
      { name: "Lagos", lat: 6.5244, lon: 3.3792 }
    ];

    const arcPairs = [
      ["Ouagadougou (Burkina Faso)", "Abidjan"],
      ["Ouagadougou (Burkina Faso)", "Dakar"],
      ["Ouagadougou (Burkina Faso)", "Bamako"],
      ["Ouagadougou (Burkina Faso)", "Niamey"],
      ["Ouagadougou (Burkina Faso)", "Lomé"],
      ["Bobo-Dioulasso", "Ouagadougou (Burkina Faso)"],
      ["Bobo-Dioulasso", "Bamako"],
      ["Abidjan", "Dakar"],
      ["Lagos", "Cotonou"],
      ["Niamey", "Lagos"],
      ["Accra", "Ouagadougou (Burkina Faso)"]
    ];

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(40, containerRef.current!.clientWidth / containerRef.current!.clientHeight, 0.1, 2000);
      camera.position.z = 340;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      containerRef.current!.appendChild(renderer.domElement);

      globeGroup = new THREE.Group();
      scene.add(globeGroup);

      const sphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS - 1, 64, 64);
      const sphereMat = new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.03, 
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      globeGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

      const auraGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 4, 64, 64);
      const auraMat = new THREE.MeshBasicMaterial({
        color: 0xa78bfa,
        transparent: true,
        opacity: 0.02,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false
      });
      globeGroup.add(new THREE.Mesh(auraGeo, auraMat));

      createDigitalGlobe();
    };

    const latLonToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const createDigitalGlobe = () => {
      const loader = new THREE.TextureLoader();
      loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg', (texture) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = 2048; canvas.height = 1024;
        ctx.drawImage(texture.image, 0, 0);
        const imgData = ctx.getImageData(0, 0, 2048, 1024).data;

        const positions: number[] = [];
        const colors: number[] = [];
        const africaPoints: THREE.Vector3[] = [];
        
        const colorAfrica = new THREE.Color(0xa78bfa); 
        const colorWorld = new THREE.Color(0x475569); 

        for (let i = 0; i < DOT_COUNT; i++) {
          const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
          const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;
          const u = (theta / (2 * Math.PI)) % 1;
          const v = phi / Math.PI;
          const index = (Math.floor(v * 1024) * 2048 + Math.floor(u * 2048)) * 4;

          const brightness = imgData[index];

          if (brightness > 50) {
            const lat = 90 - (phi * 180 / Math.PI);
            const lon = ((theta * 180 / Math.PI) % 360) - 180;
            
            const isAfrica = (lat > -35 && lat < 37 && lon > -18 && lon < 51);
            const pos = latLonToVector3(lat, lon, GLOBE_RADIUS);

            positions.push(pos.x, pos.y, pos.z);
            
            if (isAfrica) {
              colors.push(colorAfrica.r, colorAfrica.g, colorAfrica.b);
              if (Math.random() > 0.8) africaPoints.push(pos);
            } else {
              colors.push(colorWorld.r, colorWorld.g, colorWorld.b);
            }
          }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        particles = new THREE.Points(geometry, new THREE.PointsMaterial({ 
          size: 0.8, 
          vertexColors: true, 
          transparent: true, 
          opacity: 0.4, 
          depthWrite: false,
          blending: THREE.AdditiveBlending 
        }));
        
        globeGroup.add(particles);

        createPlexus(africaPoints);
        createHubs();
        createArcs();
      });
    };

    const createPlexus = (points: THREE.Vector3[]) => {
      const linePos: number[] = [];
      for (let i = 0; i < points.length; i += 2) {
        for (let j = i + 1; j < Math.min(i + 3, points.length); j++) {
          const d = points[i].distanceTo(points[j]);
          if (d < 12) linePos.push(points[i].x, points[i].y, points[i].z, points[j].x, points[j].y, points[j].z);
        }
      }
      const lineGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
      const plexusLines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.05,
        blending: THREE.AdditiveBlending 
      }));
      globeGroup.add(plexusLines);
    };

    const createHubs = () => {
      hubsGroup = new THREE.Group();
      globeGroup.add(hubsGroup);
      
      cities.forEach(c => {
        const pos = latLonToVector3(c.lat, c.lon, GLOBE_RADIUS + 1);
        
        const hub = new THREE.Mesh(
          new THREE.SphereGeometry(1.2, 16, 16), 
          new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        hub.position.copy(pos);
        hub.userData = { name: c.name };
        hubsGroup.add(hub);

        const halo = new THREE.Mesh(
          new THREE.SphereGeometry(2.5, 16, 16), 
          new THREE.MeshBasicMaterial({ 
            color: 0x8b5cf6, 
            transparent: true, 
            opacity: 0.4, 
            blending: THREE.AdditiveBlending,
            depthWrite: false
          })
        );
        halo.position.copy(pos);
        globeGroup.add(halo);

        const hit = new THREE.Mesh(new THREE.SphereGeometry(5, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
        hit.position.copy(pos);
        hit.userData = { name: c.name };
        hubsGroup.add(hit);
      });
    };

    const createArcs = () => {
      const cityMap: Record<string, THREE.Vector3> = {};
      cities.forEach(c => cityMap[c.name] = latLonToVector3(c.lat, c.lon, GLOBE_RADIUS + 1));

      arcPairs.forEach(([fromName, toName], i) => {
        const start = cityMap[fromName];
        const end = cityMap[toName];
        if (!start || !end) return;

        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5).normalize().multiplyScalar(GLOBE_RADIUS + 12 + (i%4)*4);
        const curve = new THREE.QuadraticBezierCurve3(start, end.clone().lerp(start, 0.5).add(mid.sub(end.clone().lerp(start, 0.5))), end);
        const pts = curve.getPoints(50);
        
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts), 
          new THREE.LineBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending })
        );
        globeGroup.add(line);

        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.6, 8, 8), 
          new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending })
        );
        dot.userData = { pts, offset: Math.random(), speed: 0.001 + Math.random() * 0.001 };
        globeGroup.add(dot);
      });
    };

    const onMouseDown = (e: MouseEvent) => { 
      isDragging = true; 
      previousMousePosition = { x: e.clientX, y: e.clientY }; 
    };
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      if (isDragging) {
        targetRotation.y += (e.clientX - previousMousePosition.x) * 0.005;
        targetRotation.x += (e.clientY - previousMousePosition.y) * 0.005;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hubsGroup?.children || []);
      
      if (intersects.length > 0) {
        setHoveredCity(intersects[0].object.userData.name);
        setLabelPos({ x: e.clientX, y: e.clientY });
        containerRef.current!.style.cursor = 'pointer';
      } else {
        setHoveredCity(null);
        if (!isDragging) containerRef.current!.style.cursor = 'grab';
      }
    };
    
    const onMouseUp = () => isDragging = false;

    const animate = (time: number) => {
      if (!globeGroup) return;
      requestAnimationFrame(animate);
      
      if (!isDragging) targetRotation.y += AUTO_ROT_SPEED;
      
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      
      currentRotation.x = Math.max(-Math.PI/4, Math.min(Math.PI/4, currentRotation.x));
      targetRotation.x = Math.max(-Math.PI/4, Math.min(Math.PI/4, targetRotation.x));
      
      globeGroup.rotation.set(currentRotation.x, currentRotation.y, 0);

      globeGroup.children.forEach(child => {
        if (child.userData.pts) {
          const t = (time * child.userData.speed + child.userData.offset) % 1;
          const idx = Math.floor(t * (child.userData.pts.length - 1));
          if (child.userData.pts[idx]) {
             child.position.copy(child.userData.pts[idx]);
          }
        }
      });

      renderer.render(scene, camera);
    };

    init();
    animate(0);

    const container = containerRef.current;
    container?.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      container?.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-accent-primary/20 via-transparent to-transparent blur-3xl" />
      
      <div 
        ref={containerRef} 
        className="relative w-full h-full z-10"
        style={{ cursor: 'grab' }}
      />

      {/* Holographic Label */}
      <AnimatePresence>
        {hoveredCity && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{ 
              position: 'fixed',
              left: labelPos.x,
              top: labelPos.y,
              transform: 'translate(-50%, -150%)',
              zIndex: 100,
              pointerEvents: 'none'
            }}
            className="px-4 py-2 bg-slate-900/65 backdrop-blur-xl border border-accent-primary/30 rounded-lg text-white text-xs font-bold shadow-2xl"
          >
            {hoveredCity}
            <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-accent-primary/30" />
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingCard 
        icon={<Zap className="w-3 h-3 text-green-400" />} 
        label="Statut déploiement" 
        value="En ligne" 
        className="top-[10%] left-[5%]" 
        delay={0}
      />
      <FloatingCard 
        icon={<ShieldCheck className="w-3 h-3 text-blue-400" />} 
        label="HTTPS" 
        value="Actif" 
        className="top-[40%] -right-[5%]" 
        delay={1}
      />
      <FloatingCard 
        icon={<Cpu className="w-3 h-3 text-accent-primary" />} 
        label="Utilisation CPU" 
        value="12%" 
        className="bottom-[15%] left-[10%]" 
        delay={2}
      />
      <FloatingCard 
        icon={<Database className="w-3 h-3 text-orange-400" />} 
        label="Base de données" 
        value="Saine" 
        className="bottom-[30%] -right-[10%]" 
        delay={1.5}
      />
    </div>
  );
}

function FloatingCard({ icon, label, value, className, delay }: { icon: React.ReactNode; label: string; value: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0],
        scale: 1
      }}
      transition={{ 
        opacity: { delay: delay + 0.5, duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay },
        scale: { delay: delay + 0.5, duration: 0.8 }
      }}
      className={`absolute z-20 premium-card px-4 py-3 flex flex-col gap-1 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">{label}</span>
          <span className="text-xs font-bold text-text-primary">{value}</span>
        </div>
      </div>
    </motion.div>
  );
}
