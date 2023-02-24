export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9dfb5172.mjs","imports":["_app/immutable/entry/start.9dfb5172.mjs","_app/immutable/chunks/index.92760fb2.mjs","_app/immutable/chunks/singletons.1b786d39.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.88c8b0c5.mjs","imports":["_app/immutable/entry/app.88c8b0c5.mjs","_app/immutable/chunks/index.92760fb2.mjs"],"stylesheets":[],"fonts":[]}},
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
