import React, {useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import data from '../../../data/mock.data'
import './project.styles.css'
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Suspense } from "react";
import Loader from "../../../components/loader/loader"

const Project = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [state, setState] = useState(data.data[id - 1])

    const deg2rad = degrees => degrees * (Math.PI / 180);
    
    console.log(`assets/models/${state.model}`)
    
    const Scene = () => {
        useThree(({camera}) => {
            camera.rotation.set(deg2rad(30), 0, 0);
          });
      const materials = useLoader(MTLLoader, `assets/models/${state.mtl}`);
      const obj = useLoader(OBJLoader, `assets/models/${state.model}`, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
      });
    
      return <primitive object={obj} scale={0.02} />;
    };

  return (
    <div className="projectPage">

    <div className="projectDetails">

    <div className="projectModel">
      <Loader/>
    <Canvas>
    <mesh rotation={[0, 0, 0]}>
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[1, 1, 0, 0]} />
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="studio" background />
        </Suspense>
      </mesh>
      </Canvas>
    </div>

    <div className="projectInfo">
    <h1>{state.title}</h1>

    <h2>What I learned from this experience</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi rem voluptate repellendus omnis. Est fuga laboriosam provident nesciunt vitae laudantium repellendus dolore qui numquam enim nostrum ab cupiditate molestiae dignissimos tenetur accusantium amet facere, molestias error voluptatum accusamus, ut fugiat quisquam! Cum necessitatibus libero accusantium reiciendis natus animi eaque.</p>
    </div>
    
    </div>

    </div>
  )
}

export default Project