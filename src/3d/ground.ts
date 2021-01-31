import {
    Scene,
    StandardMaterial,
    Texture,
    MeshBuilder,
    Vector3,
    MultiMaterial,
    SubMesh,
    Color3
} from "babylonjs";

interface Size{
    width: number,
    height: number,
    position: Vector3
}

interface Grid{
    h: number,
    w: number
}

export const createGround = (path: string, size: Size, scene: Scene) => {

    const material = new StandardMaterial("mat2", scene)
    // material.emissiveColor = new Color3(0.3, 0.3, 0.3);

    const groundTexture = new Texture(path, scene)
    material.diffuseTexture = groundTexture

    const ground = MeshBuilder.CreateGround('ground', size)
    ground.position = size.position
    ground.material = material

}

export const createTiledGround = (path: Array<string>, grid: Grid, scene: Scene) => {
    
    const tiledGround = MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -50, zmin: -50, xmax: 50, zmax: 50, subdivisions: grid}, scene);

    const image1 = new Texture(path[0], scene)
    const image2 = new Texture(path[1], scene)

    //Create the multi material
    //Create differents materials
    const mat1 = new StandardMaterial("White", scene);
    mat1.diffuseTexture = image1

    const mat2 = new StandardMaterial("Black", scene);
    mat2.diffuseTexture = image2

    // Create Multi Material
    const multimat = new MultiMaterial("multi", scene);
    multimat.subMaterials.push(mat1);
    multimat.subMaterials.push(mat2);
    

    // Apply the multi material
    // Define multimat as material of the tiled ground
    tiledGround.material = multimat;
   
    // Needed variables to set subMeshes
    const verticesCount = tiledGround.getTotalVertices();
    const tileIndicesLength = tiledGround.getIndices().length / (grid.w * grid.h);
    
    // Set subMeshes of the tiled ground
    tiledGround.subMeshes = [];
    let base = 0;
    for (let row = 0; row < grid.h; row++) {
        for (let col = 0; col < grid.w; col++) {
            tiledGround.subMeshes.push(new SubMesh(row%2 ^ col%2, 0, verticesCount, base , tileIndicesLength, tiledGround));
            base += tileIndicesLength;
        }
    }
}