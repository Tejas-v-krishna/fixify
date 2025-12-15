"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// 1. The Shader Code (GLSL)
const fragmentShader: string = `
uniform float uTime;
varying vec2 vUv;

void main() {
    // Zoom out slightly to see more of the pattern
    vec2 uv = vUv * 2.5;
    
    // --- Configuration for the "Slow & Subtle" feel ---
    float t = uTime * 0.15; // Very slow time factor
    
    // Initialize variables for the loop
    float i0 = 1.0;
    float i1 = 1.0;
    float i2 = 1.0;
    float i4 = 0.0;
    
    // --- Iterative Sine Distortion ---
    // This loop layers multiple waves on top of each other
    // creating complex, folding organic shapes.
    for(int s = 0; s < 4; s++) {
        vec2 r = vec2(cos(uv.y * i0 - i4 + t / i1), sin(uv.x * i0 - i4 + t / i1)) / i2;
        r += vec2(-r.y, r.x) * 0.3; // Slight rotation for swirl
        uv.xy += r; // Distort the UV coordinates
        
        // Update variables for next octave
        i0 *= 1.93;
        i1 *= 1.15;
        i2 *= 1.7;
        i4 += 0.05 * t * i1;
    }

    // Calculate final intensity based on distorted UVs
    float r = sin(uv.x - t) * 0.5 + 0.5;
    float b = sin(uv.y + t) * 0.5 + 0.5;
    float g = sin((uv.x + uv.y + sin(t * 0.5)) * 0.5) * 0.5 + 0.5;
    
    // Combine channels for a monochromatic pattern
    float pattern = (r + b + g) / 3.0;
    
    // --- Post-Processing for Subtlety ---
    // 1. Darken the image (pow function pushes midtones to black)
    pattern = pow(pattern, 3.5); 
    
    // 2. Add a very subtle grain to prevent banding on dark gradients
    float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453) * 0.03;
    
    // 3. Final color mix: Deep Black to Soft Silver
    vec3 col = mix(vec3(0.02, 0.02, 0.03), vec3(0.5, 0.55, 0.6), pattern);
    
    gl_FragColor = vec4(col + grain, 1.0);
}
`;

const vertexShader: string = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export function EtherealBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Early return if ref is not attached
        if (!currentMount) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
        // Use parent dimensions instead of window
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        // --- Uniforms ---
        // Using simple object structure which Three.js parses automatically
        const uniforms = {
            uTime: { value: 0 },
        };

        // --- Mesh Setup ---
        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms,
        });

        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // --- Animation Loop ---
        const clock = new THREE.Clock();
        let animationId: number;

        const animate = () => {
            uniforms.uTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };

        animate();

        // --- Resize Handler ---
        const handleResize = () => {
            if (currentMount) {
                // Update to parent dimensions
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
            }
        };

        window.addEventListener("resize", handleResize);

        // --- Cleanup ---
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={mountRef} className="absolute inset-0 outline-none -z-10" />
    );
}
