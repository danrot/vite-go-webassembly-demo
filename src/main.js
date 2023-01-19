import '../wasm/wasm_exec.js';
import wasmInit from '../wasm/hello-world.wasm?init';

const go = new Go();

wasmInit(go.importObject).then((instance) => {
	go.run(instance);

	// The hello_world function defined in ../wasm/main.go
	document.writeln(hello_world());
});
