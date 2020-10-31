build-wasm:
	cargo build --target wasm32-unknown-unknown
	wasm-bindgen --target deno --out-dir pkg ./target/wasm32-unknown-unknown/debug/flatten.wasm

release-wasm:
	cargo build --release --target wasm32-unknown-unknown
	wasm-bindgen --target deno --out-dir pkg ./target/wasm32-unknown-unknown/release/flatten.wasm