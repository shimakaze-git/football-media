class ApiDefinition {
  constructor(name, func) {
    this.name = name;
    this.func = func;
  }
}

const apiDefs = [];
export default apiDefs;

import videosApi from "./modules/videos";

apiDefs.push(new ApiDefinition("videosApi", videosApi));
