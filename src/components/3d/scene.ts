import { 
  Engine,
  Scene,
  Color4,
  Vector3,
  ArcRotateCamera,
  HemisphericLight,
  StandardMaterial,
  MeshBuilder,
  Texture,
  Color3,
  Viewport,
  ActionManager,
  ExecuteCodeAction
} from 'babylonjs'
import assetsPath from '../../data/3dAssetsPath';
import { inputs } from './inputs';
import { createPlayer } from './player';

export const createScene = (canvas: HTMLCanvasElement) => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.9, 0.3, 0.3, 1);

  const camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new Vector3(0, 0, -20), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, -15), scene);
  light.intensity = 0.7;

  const material = new StandardMaterial("mat1", scene);
  material.emissiveColor = new Color3(0.3, 0.3, 0.3);

  const texture = new Texture(assetsPath.funiture.floor, scene)
  material.diffuseTexture = texture

  const ground = MeshBuilder.CreateGround('ground', {
    width: 50,
    height: 50
  })
  ground.material = material

  // const cube = MeshBuilder.CreateBox("box", { height: 4, width: 4, depth: 1 }, scene);
  // cube.position.y = 2

  const player = createPlayer(scene, new Viewport(0, 0, 1, 0.5), ["w", "a", "s", "d"])

  scene.actionManager = new ActionManager(scene)
  scene.actionManager.registerAction(
    new ExecuteCodeAction(ActionManager.OnKeyDownTrigger,
    (e) => inputs[e.sourceEvent.key] = e.sourceEvent.type == "keydown")
  )
  scene.actionManager.registerAction(
    new ExecuteCodeAction(ActionManager.OnKeyUpTrigger,
    (e) => inputs[e.sourceEvent.key] = e.sourceEvent.type == "keydown")
  )

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });

  return scene;
}
