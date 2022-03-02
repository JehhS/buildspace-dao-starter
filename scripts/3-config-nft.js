import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x1c7c33dEe6D42341CF4Be0e11995FbeDcf1aF034",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Una Flor",
        description: "This NFT will give you access to CucoDao!",
        image: readFileSync("scripts/assets/welcome.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()