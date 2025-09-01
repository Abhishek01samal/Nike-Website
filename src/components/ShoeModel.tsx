import React, { useRef, useMemo, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import * as THREE from "three";
const ShoeModel = () => {
  const objRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const materials = useLoader(MTLLoader, "/shoe.mtl");
  materials.preload();
  const obj = useLoader(OBJLoader, "/shoe.obj", loader => loader.setMaterials(materials));
  const texture = useLoader(THREE.TextureLoader, "/shoe.jpg");
  const mesh = useMemo(() => {
    obj.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
          color: new THREE.Color(0xffffff),
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return obj;
  }, [obj, texture]);
  useFrame(({ mouse }) => {
    if (objRef.current) {
      const rotationSpeed = 0.8;
      if (!hovered) {
        objRef.current.rotation.y += 0.008; // Slow auto spin
      } else {
        objRef.current.rotation.x = THREE.MathUtils.lerp(
          objRef.current.rotation.x,
          -mouse.y * rotationSpeed,
          0.1
        );
        objRef.current.rotation.y = THREE.MathUtils.lerp(
          objRef.current.rotation.y,
          mouse.x * rotationSpeed,
          0.1
        );
      }
    }
  });
  return (
    <group
      ref={objRef}
      position={[0, 0.3, 0]}     // lowered for better canvas centering
      scale={[5, 5, 5]}          // balanced size
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={mesh} />
    </group>
  );
};
export default ShoeModel;
