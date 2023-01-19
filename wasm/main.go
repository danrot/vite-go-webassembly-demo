package main

import (
	"syscall/js"
)

func hello_world() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) any {
		return "Go Web Assembly";
	});
}

func main() {
	js.Global().Set("hello_world", hello_world());
	<-make(chan bool)
}
