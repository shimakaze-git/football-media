import apiDefs from "~/api/define";

export default ({ $axios }, inject) => {
  apiDefs.forEach(apiDef => {
    console.log(`regist API: ${apiDef.name}`);
    inject(apiDef.name, apiDef.func($axios));
  });
};
