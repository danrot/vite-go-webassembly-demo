import '../wasm/wasm_exec.js';

// @ts-ignore
const go = new Go();

WebAssembly.instantiateStreaming(fetch("../wasm/hello-world.wasm"), go.importObject).then((result) => {
	console.log(result);
	go.run(result.instance);
});
