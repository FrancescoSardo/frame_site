export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.eafb571e.mjs","imports":["_app/immutable/entry/start.eafb571e.mjs","_app/immutable/chunks/index.92760fb2.mjs","_app/immutable/chunks/singletons.21b3bc97.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e8f5a684.mjs","imports":["_app/immutable/entry/app.e8f5a684.mjs","_app/immutable/chunks/index.92760fb2.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
