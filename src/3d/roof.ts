import { MeshBuilder, Scene } from "babylonjs";

export const createRoof = (scene: Scene) => {

    const roof = MeshBuilder.CreateBox("roof", {
        width: 50,
        height: 2,
        depth: 50
    },scene)
    roof.position.y = 14

}