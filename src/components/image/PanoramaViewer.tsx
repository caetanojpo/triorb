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
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.needsUpdate = true;
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
  const [isPseudoFullscreen, setIsPseudoFullscreen] = useState(false);
  const [isCanvasMounted, setIsCanvasMounted] = useState(true);

  const isIos = () =>
    typeof navigator !== 'undefined' &&
    /iPhone|iPad|iPod/.test(navigator.userAgent) &&
    !('MSStream' in window);

  const supportsFullscreenApi = () =>
    typeof document !== 'undefined' &&
    (document.fullscreenEnabled ||
      (document as any).webkitFullscreenEnabled ||
      (document as any).msFullscreenEnabled);

  const applyPseudoFullscreen = (enter: boolean) => {
    const el = containerRef.current;
    if (!el) return;
    if (enter) {
      // marca o container como pseudo-fullscreen
      el.classList.add('pseudo-fullscreen');
      // previne scroll do body
      document.documentElement.style.overflow = 'hidden';
      setIsPseudoFullscreen(true);
      setIsFullscreen(true);
    } else {
      el.classList.remove('pseudo-fullscreen');
      document.documentElement.style.overflow = '';
      setIsPseudoFullscreen(false);
      setIsFullscreen(false);
    }
    // força resize para r3f atualizar renderer/camera
    setTimeout(() => window.dispatchEvent(new Event('resize')), 80);
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;

    // Primeiro: tenta a API padrão (ou vendor-prefixed)
    try {
      const doc: any = document;
      // se Fullscreen API suportada
      if (supportsFullscreenApi()) {
        if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
          const request =
            el.requestFullscreen?.bind(el) ||
            (el as any).webkitRequestFullscreen?.bind(el) ||
            (el as any).msRequestFullscreen?.bind(el);
          if (request) {
            await request();
            return;
          }
        } else {
          const exit =
            document.exitFullscreen?.bind(document) ||
            (document as any).webkitExitFullscreen?.bind(document) ||
            (document as any).msExitFullscreen?.bind(document);
          if (exit) {
            await exit();
            return;
          }
        }
      }
    } catch (err) {
      // swallow — vamos para fallback
    }

    // Se chegou aqui: Fullscreen API não disponível / não funcionou.
    // Em iPhone/IOS faça o fallback pseudo-fullscreen
    if (isIos()) {
      applyPseudoFullscreen(!isPseudoFullscreen);
      return;
    }

    // fallback genérico: tente pseudo fullscreen para qualquer browser que falhar
    applyPseudoFullscreen(!isPseudoFullscreen);
  };

  useEffect(() => {
    const handleFsChange = () => {
      const doc: any = document;
      const active =
        !!doc.fullscreenElement || !!doc.webkitFullscreenElement || !!doc.msFullscreenElement;
      // se o browser efetivamente entrou em fullscreen pela API, atualiza.
      setIsFullscreen(active || isPseudoFullscreen);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('msfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('msfullscreenchange', handleFsChange);
    };
    // inclui isPseudoFullscreen? não preciso — a função lê o valor atual quando necessário
  }, [isPseudoFullscreen]);

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
  }, [isPseudoFullscreen]);

  const handleCreated = ({ gl }: { gl: THREE.WebGLRenderer }) => {
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      setIsCanvasMounted(false);
    };

    gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);

    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLost);
    };
  };

  useEffect(() => {
    if (!isCanvasMounted) {
      const timeout = setTimeout(() => {
        setIsCanvasMounted(true);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isCanvasMounted]);

  return (
    <>
      <style>{`
        /* estilos para pseudo-fullscreen (fallback para iPhone) */
        .pseudo-fullscreen {
          position: fixed !important;
          inset: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 99999 !important;
          background: black;
          touch-action: none;
        }
        /* se quiser, ajuste aqui para suportar safe-area-inset em iPhones com notch */
        .pseudo-fullscreen canvas, .pseudo-fullscreen > * { height: 100% !important; width: 100% !important; }
      `}</style>

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
    </>
  );
}
