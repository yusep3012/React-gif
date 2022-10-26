import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en <getGifs/>", () => {
  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    const object = {
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    };

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual(object);
  });
});
