import React, {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'
import data from '../../data/mock.data'
import './project.styles.css'
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Suspense } from "react";
import Loader from "../../components/loader/loader"
import Scroll from 'react-scroll'

const Project = (props) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [state] = useState(data.data[id - 1])
    var Element  = Scroll.Element;
    var scroll = Scroll.animateScroll;

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

    const styles = {
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }

    useEffect(() => {
        scroll.scrollToTop({delay: 500})
    }, [])

    if(state.details === 'COMING SOON') return (<div></div>)

  return (

    <div className="projectPage">
        <h2 className="fixed_name">
            Lucy Ourique
        </h2>
        <Element name="myScrollToElement"></Element>
        <div style={styles} className="top" id="start">
            <img className="bgImage" src={state.background}/>
        </div>

        <div className="pageMain">
            <div className="info">
                <h2>{state.title}</h2>
                <p>{state.details}</p>

                <div className="extra">
                    {state.actions.map((value) => {
                        return (<span>{value} : Lucy Ourique</span>)
                    })}
                </div>
            </div>

            <div className="model-window">

                <div>
                    <img className="hint" src="assets/Move.gif"/>
                    <h3>Move Me Around</h3>
                </div>
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

            <div className="album">
                {state.imageArray.map((image) => {
                    return (<div className="images">
                        <img className="image" src={image}/>
                    </div>)
                })}
            </div>

        </div>

    </div>
  )
}

export default Project