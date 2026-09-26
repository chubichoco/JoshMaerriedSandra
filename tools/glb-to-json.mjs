// Convert a GLB into a single self-contained glTF JSON file (buffers/images as data URIs).
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { MeshoptDecoder, MeshoptEncoder } from "meshoptimizer";
import fs from "fs";
const [src, dst] = process.argv.slice(2);
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "meshopt.decoder": MeshoptDecoder, "meshopt.encoder": MeshoptEncoder });
const doc = await io.read(src);
const { json, resources } = await io.writeJSON(doc, { format: "gltf" });
const mime = (u) => u.endsWith(".webp") ? "image/webp" : u.endsWith(".png") ? "image/png" : u.endsWith(".jpg") || u.endsWith(".jpeg") ? "image/jpeg" : "application/octet-stream";
for (const b of json.buffers || []) if (b.uri && resources[b.uri]) b.uri = `data:application/octet-stream;base64,${Buffer.from(resources[b.uri]).toString("base64")}`;
for (const im of json.images || []) if (im.uri && resources[im.uri]) im.uri = `data:${mime(im.uri)};base64,${Buffer.from(resources[im.uri]).toString("base64")}`;
fs.writeFileSync(dst, JSON.stringify(json));
console.log(dst, fs.statSync(dst).size);
