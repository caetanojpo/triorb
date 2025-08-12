'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import LoadingFallback from '@/components/spinner/LoadingFallback';

type PanoramaProps = {
  imageSrc: string;
  className?: string;
  initialFov?: number;
};

function PanoramaMesh({ imageSrc }: { imageSrc: string }) {
  const texture = useLoader(TextureLoader, imageSrc);
  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function PanoramaViewer({
  imageSrc,
  className = 'h-80 sm:h-96',
  initialFov = 75,
}: PanoramaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCanvasMounted, setIsCanvasMounted] = useState(true);

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    const doc: any = document;
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      const request =
        el.requestFullscreen?.bind(el) ||
        (el as any).webkitRequestFullscreen?.bind(el) ||
        (el as any).msRequestFullscreen?.bind(el);
      try {
        if (request) await request();
      } catch (err) {}
    } else {
      const exit =
        document.exitFullscreen?.bind(document) ||
        (document as any).webkitExitFullscreen?.bind(document) ||
        (document as any).msExitFullscreen?.bind(document);
      try {
        if (exit) await exit();
      } catch (err) {}
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      const doc: any = document;
      const active =
        !!doc.fullscreenElement || !!doc.webkitFullscreenElement || !!doc.msFullscreenElement;
      setIsFullscreen(active);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('msfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('msfullscreenchange', handleFsChange);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f') {
        const active = document.activeElement;
        if (
          active &&
          (active.tagName === 'INPUT' ||
            active.tagName === 'TEXTAREA' ||
            (active as HTMLElement).isContentEditable)
        ) {
          return;
        }
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleCreated = ({ gl }: { gl: THREE.WebGLRenderer }) => {
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      // Desmonta o Canvas para garantir uma limpeza completa
      setIsCanvasMounted(false);
    };

    gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);

    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLost);
    };
  };

  // Efeito para remontar o Canvas após a perda de contexto
  useEffect(() => {
    if (!isCanvasMounted) {
      const timeout = setTimeout(() => {
        setIsCanvasMounted(true);
      }, 100); // Um pequeno atraso para garantir que a DOM seja limpa
      return () => clearTimeout(timeout);
    }
  }, [isCanvasMounted]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative overflow-hidden ${className}`}
      role="region"
      aria-label="Panorama viewer"
    >
      <Suspense fallback={<LoadingFallback />}>
        {isCanvasMounted ? (
          <Canvas
            onCreated={handleCreated}
            camera={{ fov: initialFov, near: 0.1, far: 2000, position: [0, 0, 0.1] }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.5} />
            <PanoramaMesh imageSrc={imageSrc} />
            <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={-0.4} />
          </Canvas>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingFallback />
          </div>
        )}
      </Suspense>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 bg-black/30 text-white text-xs rounded-full px-3 py-1 backdrop-blur">
        Arraste para olhar ao redor
      </div>

      <button
        onClick={toggleFullscreen}
        aria-pressed={isFullscreen}
        aria-label={isFullscreen ? 'Sair do modo tela cheia' : 'Entrar em tela cheia'}
        className="absolute top-3 left-3 z-40 bg-support-500/40 hover:bg-support-500/60 cursor-pointer text-white px-3 py-2 rounded-md text-sm backdrop-blur transition"
        title={isFullscreen ? 'Sair do modo tela cheia (F)' : 'Tela cheia (F)'}
      >
        {isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
      </button>
    </div>
  );
}
