import { Mesh, MeshBuilder, Scene } from "babylonjs";
import { registerBeforeRender } from "./register";

export const createWall = (player: Mesh,scene: Scene) => {

    const frontWall = MeshBuilder.CreateBox("frontWall", {
        width: 50,
        height: 12,
        depth: 3
    },scene)
    frontWall.position.y = 6
    frontWall.position.z = ((50 - 3)/2) * -1

    const backWall = MeshBuilder.CreateBox("backWall", {
        width: 50,
        height: 12,
        depth: 3
    },scene)
    backWall.position.y = 6
    backWall.position.z = (50 - 3)/2

    const leftWall = MeshBuilder.CreateBox("frontWall", {
        width: 3,
        height: 12,
        depth: 50
    },scene)
    leftWall.position.y = 6
    leftWall.position.x = ((50 - 3)/2) * -1

    const rightWall = MeshBuilder.CreateBox("frontWall", {
        width: 3,
        height: 12,
        depth: 50
    },scene)
    rightWall.position.y = 6
    rightWall.position.x = ((50 - 3)/2)

    if(player != null){
        scene.registerBeforeRender(() => registerBeforeRender(player, 
            [ frontWall, leftWall, rightWall, backWall ]
        ))
    }

    

}