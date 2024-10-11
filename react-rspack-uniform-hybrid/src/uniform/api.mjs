import { CanvasClient, RouteClient } from "@uniformdev/canvas";
// import { homeComposition } from "../../content/homeComposition.json"; assert: { type: 'json' }
// const homeComposition = await import('../../content/homeComposition.json', {
//   assert: { type: 'json' }
// });

export async function getComposition(path) {
  // returning a static composition from json
  // return homeComposition;

  // TODO: use this to fetch composition live
  return await getLiveComposition(path);
}

export async function getLiveComposition(path) {
  // TODO: move into env vars
  // const canvasClient = new CanvasClient({
  //   projectId: "6fe78cf4-51b0-4726-8123-25033cd1234b",
  //   apiKey:
  //     "uf109m0u20qerkyp8z9zede24eue4fkfy3lcsum9552gp96acusdnec6nhqfvlje386c4fhdthw6ytqw5t4ptr9y0gpxasa6x",
  // });
  const routeClient = new RouteClient({
    projectId: "6fe78cf4-51b0-4726-8123-25033cd1234b",
    apiKey:
      "uf109m0u20qerkyp8z9zede24eue4fkfy3lcsum9552gp96acusdnec6nhqfvlje386c4fhdthw6ytqw5t4ptr9y0gpxasa6x"
  });

  // const response = await canvasClient.getCompositionByNodePath({
  //   projectMapNodePath: path ?? "/",
  // })

  const response = await routeClient.getRoute({
    path
  });

  if (response.type === "composition") {
    return response.compositionApiResponse.composition;
  }

  return null;

  return response.composition;
}
