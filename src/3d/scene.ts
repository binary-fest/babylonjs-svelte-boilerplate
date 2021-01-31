import { 
  Engine,
  Scene,
  Color4,
  Vector3,
  HemisphericLight,
  Viewport,
  ActionManager,
  ExecuteCodeAction,
  ArcRotateCamera,
  Sound,
  Mesh
} from 'babylonjs'
import path from '../config/path'
import { createGround, createTiledGround } from './ground';
import { inputs } from './inputs';
import { createStage } from './stage';
import { createPlayer } from './player';
import { createRoof } from './roof';
import { createWall } from './walls';
import { createDecoration } from './decoration';
import { createStand } from './stand';
import * as GUI from 'babylonjs-gui'
import { click } from '../store';



export const createScene = (canvas: HTMLCanvasElement, mode: string) => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.9, 0.3, 0.3, 1);

  const light = new HemisphericLight("light", new Vector3(0, 10, 0), scene);
  light.intensity = 0.5;

  let player: Mesh
  switch(mode){
    case "play":
      player = createPlayer(scene, new Viewport(0, 0, 1, 1))

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

  // create roof 3d
  // createRoof(scene)

  // create 4 wall
  // createWall(player, scene)

  // create ground 3d
  // createGround(path.images.floor, {
  //   width: 50,
  //   height: 60,
  //   position: new Vector3(0, 0, 0)
  // },scene)

  createTiledGround([path.images.floor, path.images.whiteWill],{
    h: 10,
    w: 10
  }, scene)

  // decoration
  // createDecoration(path.images.logo,scene)

  // createGround(path.images.floor, {
  //   width: 10,
  //   height: 10,
  //   position: new Vector3(0, 0, -30)
  // }, scene)

  // create main show
  createStage({
    x: 0,
    y: 0,
    z: 40
  }, player,scene)

  createStand({ x: -30, y: 0, z: 30}, {
    name: "BINARY",
    logo_url: path.images.logo,
    v_image_url: path.images.logo,
    h_image_url: path.images.logo
  },scene)

  // createStand({
  //   x: -35,
  //   y: 0,
  //   z: 0
  // }, scene)

  var plane = Mesh.CreatePlane("plane", 2, scene);
  plane.position.y = 2;

  const advanced = GUI.AdvancedDynamicTexture.CreateForMesh(plane)
  const button = GUI.Button.CreateSimpleButton("button", "click me")
  button.width = 1
  button.height = 0.4
  button.color = "white"
  button.fontSize = 50
  button.background = "green"
  button.onPointerClickObservable.add(() => {
    click.set(true)
  })
  advanced.addControl(button)

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });

  return scene;
}
