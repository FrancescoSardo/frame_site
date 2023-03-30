import {
  Object3D,
  PointLight,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  MeshPhongMaterial,
  AmbientLight,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function degToRad(deg: number) {
  return deg * (Math.PI / 180);
}

export async function generateScene(container: HTMLElement, gltf_path: string) {
  let item: Object3D;

  let loader = new GLTFLoader();

  const scene = new Scene();

  const camera = new PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    2000
  );


  const renderer = new WebGLRenderer({ alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(
    container.clientWidth,
    container.clientHeight
  );

  let obj = await loader.loadAsync(gltf_path);

  item = obj.scene as Object3D;

  scene.add(item);

  camera.position.z = 150;

  // add point light
  const pointLight = new PointLight(0xffffff, 1, 1000);
  pointLight.position.set(0, 30, 30);
  scene.add(pointLight);

  const ambientLight = new AmbientLight(0xffffff, 0.1);
  scene.add(ambientLight);


  container.appendChild(renderer.domElement);

  return {
    scene,
    camera,
    renderer,
    item,
  }
}