"use client";
import { Color, Fog, PerspectiveCamera, Scene, Vector3 } from "three";
import { useEffect, useRef, useMemo, useState } from "react";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;
const aspect = 1.2;

function useDefaultConfig(globeConfig: GlobeConfig) {
  return useMemo(
    () => ({
      pointSize: 1,
      atmosphereColor: "#ffffff",
      showAtmosphere: true,
      atmosphereAltitude: 0.1,
      polygonColor: "rgba(255,255,255,0.7)",
      globeColor: "#1d072e",
      emissive: "#000000",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      arcTime: 2000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      ...globeConfig,
    }),
    [globeConfig]
  );
}

function useStableScene() {
  return useMemo(() => {
    const s = new Scene();
    s.fog = new Fog(0xffffff, 400, 2000);
    return s;
  }, []);
}

function useStableCamera() {
  return useMemo(() => new PerspectiveCamera(50, aspect, 180, 1800), []);
}

function WebGLRendererConfig() {
  const { gl } = useThree();

  useEffect(() => {
    gl.setClearColor(0xffaaff, 0); // Optional
  }, []);

  return null;
}

function GlobeCore({
  data,
  config,
}: {
  data: Position[];
  config: ReturnType<typeof useDefaultConfig>;
}) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized || !globeRef.current) return;

    const globe = globeRef.current;
    const mat = globe.globeMaterial() as any;
    mat.color = new Color(config.globeColor);
    mat.emissive = new Color(config.emissive);
    mat.emissiveIntensity = config.emissiveIntensity;
    mat.shininess = config.shininess;

    const points: any[] = [];
    data.forEach((d) => {
      points.push(
        {
          size: config.pointSize,
          color: d.color,
          lat: d.startLat,
          lng: d.startLng,
        },
        { size: config.pointSize, color: d.color, lat: d.endLat, lng: d.endLng }
      );
    });

    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );

    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(config.showAtmosphere)
      .atmosphereColor(config.atmosphereColor)
      .atmosphereAltitude(config.atmosphereAltitude)
      .hexPolygonColor(() => config.polygonColor);

    globe
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: any) => (e as { color: string }).color)
      .arcAltitude((e) => (e as { arcAlt: number }).arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(config.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(config.arcTime);

    globe
      .pointsData(filteredPoints)
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0)
      .pointRadius(2);

    globe
      .ringsData([])
      .ringColor(() => config.polygonColor)
      .ringMaxRadius(config.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((config.arcTime * config.arcLength) / config.rings);
  }, [initialized, data, config]);

  useEffect(() => {
    if (!initialized || !globeRef.current) return;

    const interval = setInterval(() => {
      const selected = genRandomNumbers(
        0,
        data.length,
        Math.floor(data.length * 0.8)
      );
      const rings = selected.map((i) => {
        const d = data[i];
        return { lat: d.startLat, lng: d.startLng, color: d.color };
      });
      globeRef.current?.ringsData(rings);
    }, 2000);

    return () => clearInterval(interval);
  }, [initialized, data]);

  return <group ref={groupRef} />;
}

export function World({ globeConfig, data }: WorldProps) {
  const config = useDefaultConfig(globeConfig);
  const scene = useStableScene();
  const camera = useStableCamera();

  return (
    <Canvas scene={scene} camera={camera}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <GlobeCore data={data} config={config} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

// Utils
function genRandomNumbers(min: number, max: number, count: number): number[] {
  const arr = new Set<number>();
  while (arr.size < count) {
    arr.add(Math.floor(Math.random() * (max - min)) + min);
  }
  return [...arr];
}
