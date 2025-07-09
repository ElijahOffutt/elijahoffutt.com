// ┌──────────────────────┐
// │ SCENE SET UP SERVICE │
// └──────────────────────┘

//  BABYLON.JS IMPORTS
// CORE IMPORTS
import {
    Engine, // ⚙️ <== USED TO DEFINE STANDARD(WebGL) ENGINE
    WebGPUEngine, // ⚙️ <== USED TO DEFINE WEBGPU ENGINE *CONDITIONALLY*
    Scene, // 🏙️ <== USED TO SHOW SCENE ON CANVAS
    UniversalCamera, // 📽️ <== 
    Vector3, // 🔢 <== USED AS TYPE TO POSITION SCENE ELEMENTS
    MeshBuilder, // 🏗️ <== USED TO CREATE MESHES
    StandardMaterial, // 👚 <== USED TO DEFINE MATERIALS
    Color3, // 🔢 <== USED TO DEFINE COLORS AS ARRAY TYPES
    HemisphericLight, // 💡 <== 
    AxesViewer, // 🌐 <== USED TO SHOW SCENE HELPER AXES 
    Texture, // <== USED TO LOAD TEXTURES
    GizmoManager,
} from "@babylonjs/core";

// INSPECTOR IMPORTS
import {
    Inspector // <== USED TO SHOW INSPECTOR ON SCENE
} from "@babylonjs/inspector";
import {
    DebugLayer // <== USED TO SHOW DEBUG LAYER ON SCENE
} from "@babylonjs/core/Debug/debugLayer";

import { animate } from "animejs";



const createScene = async (canvas) => {

    // ⚙️ CONFIGURE ENGINE
    let engine; // 💾 <-- CACHE ENGINE REFERENCE
    // ❓ CHECK FOR WEBGPU SUPPORT
    if (navigator.gpu) { // 🌐 <== USING `navigator`
        // 🚚 CREATE A WEBGPU ENGINE
        engine = new WebGPUEngine(canvas);
        // 🔄 INITIALIZE THE ENGINE
        await engine.initAsync();
    } else {
        // 🚚 CREATE A STANDARD ENGINE
        engine = new Engine(canvas, true /* antialias */, { preserveDrawingBuffer: true });
    }

    // 🔄 RESIZE ENGINE ON WINDOW RESIZE
    window.addEventListener("resize", () => { engine.resize(); })

    // 🏙️ CREATE A SCENE
    const scene = new Scene(engine);

    const gizmoManager = new GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.scaleGizmoEnabled = true;

    Inspector.Show(scene, {
        embedMode: true,
        showExplorer: true,
        showInspector: true,
        enableDebugLayers: true,
        enableHierarchyPanel: true,
        enableInspectorPanel: true,
        enableExplorerPanel: true,
        enableInspectorTools: true
    });
    new DebugLayer(scene)
    new AxesViewer(scene, 2);

    const camera = new UniversalCamera("Main Camera", new Vector3(0, 10, -10), scene);
    camera.setTarget(Vector3.Zero());
    // camera.attachControl(canvas, true);

    new HemisphericLight("light", Vector3.Up(), scene);

    const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
    const material = new StandardMaterial("box-material", scene);
    material.diffuseColor = Color3.Purple();
    box.material = material;
    gizmoManager.attachToMesh(box);


    // 🔄 START ANIMATION LOOP
    engine.runRenderLoop(() => scene.render());

    // ↪️ RETURNED OBJECTS
    return { engine, scene, camera, box }
};

export { createScene };
