import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useRender } from 'react-three-fiber';
import * as THREE from 'three';

const Image = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('/scene.gltf', setModel);
  });

  return model ? <primitive object={model.scene} /> : null;
};

export default () => {
  return (
    <>
      <Canvas
        camera={{ position: [8, 8, 2] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 20, 5]} penumbra={1} castShadow />

        {/* <Box /> */}
        {/* <Plane /> */}
        <Image />
      </Canvas>
    </>
  );
};
