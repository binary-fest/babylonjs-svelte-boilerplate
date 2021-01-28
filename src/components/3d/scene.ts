import { 
  Engine,
  Scene,
  Color4,
  Vector3,
  HemisphericLight,
  StandardMaterial,
  MeshBuilder,
  Viewport,
  ActionManager,
  ExecuteCodeAction,
  ArcRotateCamera,
  Sound
} from 'babylonjs'
import path from '../../config/path'
import { createGround } from './ground';
import { inputs } from './inputs';
import { createMainRoom } from './mainRoom';
import { createPlayer } from './player';

export const createScene = (canvas: HTMLCanvasElement, mode: string) => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.9, 0.3, 0.3, 1);

  const light = new HemisphericLight("light", new Vector3(0, 10, 0), scene);
  light.intensity = 0.2;

  const material = new StandardMaterial('mat2', scene)



  const cube = MeshBuilder.CreateBox("box", { height: 4, width: 4, depth: 1 }, scene);
  cube.position.y = 2
  cube.material = material


  // create ground 3d
  createGround(path.funiture.floor, {
    width: 50,
    height: 50
  },scene)

  // create main show
  createMainRoom({
    xPos: 0,
    yPos: 0,
    zPos: 0
  },scene)

  // const music = new Sound("music", path.music, scene, null, {
  //   loop: true,
  //   autoplay: true
  // })


  switch(mode){
    case "play":
      createPlayer(scene, new Viewport(0, 0, 1, 1))

      scene.actionManager = new ActionManager(scene)
      scene.actionManager.registerAction(
        new ExecuteCodeAction(ActionManager.OnKeyDownTrigger,
        (e) => inputs[e.sourceEvent.key] = e.sourceEvent.type == "keydown")
      )
      scene.actionManager.registerAction(
        new ExecuteCodeAction(ActionManager.OnKeyUpTrigger,
        (e) => inputs[e.sourceEvent.key] = e.sourceEvent.type == "keydown")
      )
    
    default:
      const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new Vector3(0, 0, 0), scene)
      camera.attachControl(canvas, true)


  }


  

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });

  return scene;
}
