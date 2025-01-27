import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Gaming_chair } from "./Gaming_chair";
import { Avatar } from "./TanmayChar";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  

  return (
    <>
      
      <mesh>
        <hemisphereLight intensity={1.0} groundColor="black" />
        <pointLight intensity={1} position={[0, -1.7, -0.5]} />
        <spotLight
          position={[17, 17, 10]}
          angle={0.18}
          penumbra={1}
          decay={0}
          intensity={Math.PI * 1.5}
          castShadow
          shadow-mapSize={1024}
        />
        
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.35 : 0.4}
          position={isMobile ? [-1.8, -3.25, -1.5] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
        <Gaming_chair scale={0.12} position={[1.8, -3, 0.5 ]} rotation={[-0.1, -1.9, -0.1]}/>
        <Avatar scale={2.32} position={[1.5, -5.1, 0.5 ]} rotation={[-0.1, -1.9, -0.1]} />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handelMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handelMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handelMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      // frameloop="demand"
      shadows
      camera={{ position: [3, 5, 6], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
    // <div style={{ width: "100%", height: "100vh" }}>

    // </div>
  );
};

export default ComputersCanvas;
