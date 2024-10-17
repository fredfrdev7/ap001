import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticlesWave = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.y = 20; //changes how far back you can see i.e the particles towards horizon
        camera.position.z = 0; //This is how close or far the particles are seen
        camera.rotation.x = -1.1;
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio * 2);

        const AMOUNTX = 360; // Número de partículas ao longo do eixo X
        const AMOUNTY = 115; // Número de partículas ao longo do eixo Y
        const SEPARATION = 1.2; // Espaçamento entre as partículas

        const PI2 = Math.PI * 2;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = 512;
        canvas.height = 512;
        context.fillStyle = "#bd1622"; // Cor das partículas
        context.beginPath();
        context.arc(256, 256, 240, 0, PI2); // Raio do círculo
        context.fill();

        const texture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 0.2, // Tamanho das partículas
            sizeAttenuation: true,
            map: texture,
            transparent: true,
            opacity: 1, // Opacidade das partículas
        });

        const particlesGeometry = new THREE.BufferGeometry();

        const positions = [];
        const colors = [];

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const y = 0; // Ajuste a posição y conforme necessário
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION - 7);

                positions.push(x, y, z);
                colors.push(1, 1, 1); // Cor das partículas (branco)
            }
        }

        particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        particlesGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

        const particles = new THREE.Points(particlesGeometry, material);
        scene.add(particles);

        const animateParticles = () => {
            requestAnimationFrame(animateParticles);

            const positions = particles.geometry.attributes.position.array;
            const time = Date.now() * 0.007;

            const amplitude = 3; // Ajuste a amplitude conforme necessário
            const frequency = 0.15; // Ajuste a frequência conforme necessário

            for (let i = 3; i < positions.length; i += 3) {
                const x = positions[i];
                const y = Math.sin((x * 0.5 + time) * frequency) * amplitude ;
                const z = positions[i + 2];

                const offsetX = Math.cos((z * 0.6 + time) * frequency ) * amplitude + 5 ;

                positions[i + 1] = y + offsetX;
                positions[i + 2] = z;
            }

            particles.geometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
        };

        animateParticles();

        const handleWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', handleWindowResize);

        // Define a cor de fundo diretamente no canvas
        renderer.setClearColor(0xffffff, 1); // Cor preta como exemplo

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return <canvas ref={canvasRef} />;
}

export default ParticlesWave;
