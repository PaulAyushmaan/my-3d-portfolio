import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	Decal,
	Float,
	useTexture,
	OrbitControls,
	Preload,
} from '@react-three/drei';
import CanvasLoader from '../Loader';
const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);
	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={1.5} />
			<directionalLight position={[0, -10, 0]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<pointLight intensity={4} />
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="pink"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};
const BallCanvas = ({ icon }) => {
	return (
		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
