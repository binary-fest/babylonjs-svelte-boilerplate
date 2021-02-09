import { Color3, Color4, DynamicTexture, HighlightLayer, Mesh, MeshBuilder, PointLight, Scene, StandardMaterial, Texture, Tools, Vector3, Vector4 } from "babylonjs"
import path from "../config/path"
import type { PosConstrain } from "../model/Constraint"
import type { StandModel } from "../model/StandModel"
import { createLight } from "./light"
import * as GUI from 'babylonjs-gui'
import { click, StandDesc } from '../store';

export const createStand = (pos: PosConstrain, data: StandModel,scene: Scene) => {

    createLight({
        x: pos.x - 1,
        y: 8.4,
        z: -5 + pos.z
    }, 0.4, new Color3(1.0, 1.0, 0.7), scene)

    createLight({
        x: pos.x - 1,
        y: 8.4,
        z: 5 + pos.z
    }, 0.4, new Color3(1.0, 1.0, 0.7), scene)

    const texture = new Texture(path.images.woodenWall, scene)
    const mat = new StandardMaterial("mat", scene)
    mat.diffuseTexture = texture
    // mat2.emissiveColor = new Color3(0.5, 0.5, 0.5)

    // 
    const base = MeshBuilder.CreateBox("base", {
        width: 8,
        height: 0.4,
        depth: 16
    })
    base.position.y = 0.4/2 + pos.y
    base.position.x = pos.x
    base.position.z = pos.z

    const behind = MeshBuilder.CreateBox("base", {
        width: 1,
        height: 8,
        depth: 16
    })
    behind.position.y = 8/2 + 0.4 + pos.y
    behind.position.x = (8/2 - 0.5) * -1 + pos.x
    behind.position.z = pos.z
    behind.material = mat

    const bot = MeshBuilder.CreateBox("base", {
        width: 0.5,
        height: 1,
        depth: 16
    })
    bot.position.y = 1/2 + 0.4 + pos.y
    bot.position.x = -2.75 + pos.x
    bot.position.z = pos.z
    bot.material = mat

    let box = MeshBuilder.CreateBox("base", {
        width: 0.5,
        height: 2,
        depth: 3.5
    })
    box.position.y = 2/2 + 0.4 + 1 + pos.y
    box.position.x = -2.75 + pos.x
    box.position.z = (16/2 - 3.5/2) * -1 + pos.z

    box = MeshBuilder.CreateBox("base", {
        width: 0.5,
        height: 2,
        depth: 3.5
    })
    box.position.y = 2/2 + 0.4 + 1 + pos.y
    box.position.x = -2.75 + pos.x
    box.position.z =(-3.6 + (16/2 - 3.5/2)) * -1 + + pos.z

    box = MeshBuilder.CreateBox("base", {
        width: 0.5,
        height: 2,
        depth: 3.5
    })
    box.position.y = 2/2 + 0.4 + 1 + pos.y
    box.position.x = -2.75 + pos.x
    box.position.z =(-7.2 + (16/2 - 3.5/2)) * -1 + + pos.z

    // bawah 1
    let behindTable = MeshBuilder.CreateBox("base", {
        width: 1.5,
        height: 1.2,
        depth: 0.75
    })
    behindTable.position.y = 1.2/2 + 0.4 + pos.y
    behindTable.position.x = -2.25 + pos.x
    behindTable.position.z = 4 + pos.z

    // tengah 1
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1,
        height: 5.8,
        depth: 0.75
    })
    behindTable.position.y = 5.8/2 + 0.4 + 1.2 + pos.y
    behindTable.position.x = -2.5 + pos.x
    behindTable.position.z = 4 + pos.z

    // atas 1
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1.5,
        height: 1.2,
        depth: 0.75
    })
    behindTable.position.y = 1.2/2 + 0.4 + 1.2 + 5.8 +pos.y
    behindTable.position.x = -2.25 + pos.x
    behindTable.position.z = 4 + pos.z

    // bawah 2
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1.5,
        height: 1.2,
        depth: 0.75
    })
    behindTable.position.y = 1.2/2 + 0.4 + pos.y
    behindTable.position.x = -2.25 + pos.x
    behindTable.position.z = 4 + 1 + pos.z

    // tengah 2
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1,
        height: 5.8,
        depth: 0.75
    })
    behindTable.position.y = 5.8/2 + 0.4 + 1.2 + pos.y
    behindTable.position.x = -2.5 + pos.x
    behindTable.position.z = 4 + 1 + pos.z

    // atas 2
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1.5,
        height: 1.2,
        depth: 0.75
    })
    behindTable.position.y = 1.2/2 + 0.4 + 1.2 + 5.8 +pos.y
    behindTable.position.x = -2.25 + pos.x
    behindTable.position.z = 4 + 1 + pos.z

    // bawah 3
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1.5,
        height: 1.2,
        depth: 0.75
    })
    behindTable.position.y = 1.2/2 + 0.4 + pos.y
    behindTable.position.x = -2.25 + pos.x
    behindTable.position.z = 4 + 2 + pos.z

    // tengah 3
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1,
        height: 5.8,
        depth: 0.75
    })
    behindTable.position.y = 5.8/2 + 0.4 + 1.2 + pos.y
    behindTable.position.x = -2.5 + pos.x
    behindTable.position.z = 4 + 2 + pos.z

    // atas 3
    behindTable = MeshBuilder.CreateBox("base", {
        width: 1.5,
        height: 1.2,
        depth: 0.75
    })
    behindTable.position.y = 1.2/2 + 0.4 + 1.2 + 5.8 +pos.y
    behindTable.position.x = -2.25 + pos.x
    behindTable.position.z = 4 + 2 + pos.z

    const foot = MeshBuilder.CreateBox("foot", {
        width: 3,
        height: 1.5,
        depth: 3
    })
    foot.position.y = 1.5/2 + 0.4 + pos.y
    foot.position.x = (8/2 - 1.5) + pos.x
    foot.position.z = (16/2 - 1.5) * -1 + pos.z

    const pole = MeshBuilder.CreateBox("pole", {
        width: 1,
        height: 6.5,
        depth: 3
    })
    pole.position.y = 6.5/2 + 0.4 + 1.5 + pos.y
    pole.position.x = (8/2 - 0.5) + pos.x
    pole.position.z = (16/2 - 1.5) * -1 + pos.z
    pole.material = mat

    const table = MeshBuilder.CreateBox("table", {
        width: 1.5,
        height: 3,
        depth: 5
    })
    table.position.y = 3/2 + 0.4 + pos.y
    table.position.x = (8/2 - 1.5/2) + pos.x
    table.position.z = (16/2 - 5/2) + pos.z - 1
    table.material = mat

    const tableTop = MeshBuilder.CreateBox("table", {
        width: 2,
        height: 0.5,
        depth: 5.5
    })
    tableTop.position.y = 0.5/2 + 0.4 + 3 + pos.y
    tableTop.position.x = (8/2 - 1.5/2) + pos.x
    tableTop.position.z = (16/2 - 5/2) + pos.z - 1

    const roof = MeshBuilder.CreateBox("base", {
        width: 5,
        height: 0.8,
        depth: 16
    })
    roof.position.y = 0.8/2 + 0.4 + 8 + pos.y
    roof.position.x = (8/2 - 2.5) * -1 + pos.x
    roof.position.z = pos.z
    roof.material = mat

    const faceColors = new Array(6)
    for(let i=0; i < faceColors.length; i++){
        faceColors[i] = new Color4(1, 1, 1, 1)
    }

    const poleRoof = MeshBuilder.CreateBox("foot", {
        width: 3,
        height: 0.8,
        depth: 3,
        faceColors
    })
    poleRoof.position.y = 0.8/2 + 0.4 + 1.5 + 6.5 + pos.y
    poleRoof.position.x = (8/2 - 1.5) + pos.x
    poleRoof.position.z = (16/2 - 1.5) * -1 + pos.z 

    var text = new DynamicTexture("dynamic texture", {width:512, height:256}, scene, true);
	
    var materialText = new StandardMaterial("Mat", scene);
    materialText.emissiveColor = new Color3(0.7, 0.7, 0.7)			
	materialText.diffuseTexture = text;
	
    //Add text to dynamic texture
    var font = "bold 96px monospace";
    text.drawText(data.name, 75, 140, font, "black", "white", true, true);

    const faceUV = new Array(6)
    faceUV[0] = new Vector4(0, 0, 0, 0)
    faceUV[1] = new Vector4(0, 0, 0, 0)
    // faceUV[2] = new Vector4(0, 1, -1, 0)
    faceUV[3] = new Vector4(0, 0, 0, 0)
    faceUV[4] = new Vector4(0, 0, 0, 0)
    faceUV[5] = new Vector4(0, 0, 0, 0)

    const tableText = MeshBuilder.CreateBox("text", {
        width: 0.2,
        height: 2,
        depth: 1,
        faceUV
    })
    tableText.position.y = 2/2 + 0.4 + 1.3 + pos.y
    tableText.position.x = (8/2) + 0.1 + pos.x
    tableText.position.z = (16/2 - 5/2) + pos.z - 1
    tableText.rotation.x = 1.575
    tableText.material = materialText

    const poleTex = new Texture(data.logo_url, scene)
    const poleMat = new StandardMaterial('mat', scene)
    poleMat.emissiveColor = new Color3(1.0, 1.0, 0.7)
    poleMat.diffuseTexture = poleTex

    const poleLogo = MeshBuilder.CreateBox("text", {
        width: 0.2,
        height: 2,
        depth: 2,
        faceUV
    })
    poleLogo.position.y = 2/2 + 0.4 + 5 + pos.y
    poleLogo.position.x = (8/2) + 0.1 + pos.x
    poleLogo.position.z = (16/2 - 1.5) * -1 + pos.z
    poleLogo.rotation.x = 1.575
    poleLogo.material = poleMat

    const vImageTex = new Texture(data.v_image_url, scene)
    const vImageMat = new StandardMaterial('mat', scene)
    vImageMat.emissiveColor = new Color3(1.0, 1.0, 0.7)
    vImageMat.diffuseTexture = vImageTex

    let behindLogo = MeshBuilder.CreateBox("vertival", {
        width: 0.2,
        height: 2,
        depth: 3,
        faceUV
    })
    behindLogo.position.y = 2/2 + 0.4 + 4.5 + pos.y
    behindLogo.position.x = pos.x - 2.9
    behindLogo.position.z = (16/2 - 2) * -1 + pos.z
    behindLogo.rotation.x = 1.575
    behindLogo.material = vImageMat

    const hImageTex = new Texture(data.h_image_url, scene)
    const hImageMat = new StandardMaterial('mat', scene)
    hImageMat.emissiveColor = new Color3(1.0, 1.0, 0.7)
    hImageMat.diffuseTexture = hImageTex

    behindLogo = MeshBuilder.CreateBox("vertival", {
        width: 0.2,
        height: 6,
        depth: 3,
        faceUV
    })
    behindLogo.position.y = 2/2 + 0.4 + 4.5 + pos.y
    behindLogo.position.x = pos.x - 2.9
    behindLogo.position.z = pos.z - 1
    behindLogo.rotation.x = 1.575
    behindLogo.material = hImageMat

    var plane = Mesh.CreatePlane("plane", 2, scene);
  plane.position.y = 3 + pos.y;
  plane.position.z = -1.8 + pos.z;
  plane.position.x = 2 + pos.x
  plane.rotation.y = Tools.ToRadians(-90)

  const advanced = GUI.AdvancedDynamicTexture.CreateForMesh(plane)
  const button = GUI.Button.CreateSimpleButton("button", "Show More")
  button.width = 1
  button.height = 0.4
  button.hoverCursor = "pointer"
  button.cornerRadius = 100
  button.color = "white"
  button.fontSize = 100
  button.background = "orange"
  button.onPointerClickObservable.add(() => {
    StandDesc.set(data)
    click.set(true)
  })
  advanced.addControl(button)

  scene.registerBeforeRender(() => {
    plane.rotation.y += 0.02;

  })

}