const manifest = {
	appDir: "_app",
	appPath: "frame_site/_app",
	assets: new Set([".nojekyll","favicon.png","long.gltf"]),
	mimeTypes: {".png":"image/png",".gltf":"model/gltf+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b44c26ef.js","imports":["_app/immutable/entry/start.b44c26ef.js","_app/immutable/chunks/index.7c4a083c.js","_app/immutable/chunks/singletons.dae19c14.js","_app/immutable/chunks/index.d5d36601.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7b1a8c9b.js","imports":["_app/immutable/entry/app.7b1a8c9b.js","_app/immutable/chunks/index.7c4a083c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-4a765a9d.js'),
			() => import('./chunks/1-a024391e.js'),
			() => import('./chunks/2-e5b8d9ab.js'),
			() => import('./chunks/3-efbdd669.js'),
			() => import('./chunks/4-a236df2b.js'),
			() => import('./chunks/5-8f9499b8.js'),
			() => import('./chunks/6-70265a1c.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/carrello",
				pattern: /^\/carrello\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/tamponi/acquista/[[item]]",
				pattern: /^\/tamponi\/acquista(?:\/([^/]+))?\/?$/,
				params: [{"name":"item","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/tamponi/confronta",
				pattern: /^\/tamponi\/confronta\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/tamponi/panoramica",
				pattern: /^\/tamponi\/panoramica\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
