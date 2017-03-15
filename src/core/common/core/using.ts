import {IDisposable} from "../contracts/idisposable";

export function using<T extends IDisposable>(resource: T, func: (resource: T) => void) {
   try {
      func(resource);
   } finally {
      resource.dispose();
   }
}

// class Camera implements IDisposable {
//    takePicture() { /* omitted */ }
//    // etc...
//    dispose() {
//       navigator.camera.cleanup();
//    }
// }


// using(new Camera(), (camera) => {
//    camera.takePicture();
// });