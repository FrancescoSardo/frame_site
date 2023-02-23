export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c0f0d269.mjs","imports":["_app/immutable/entry/start.c0f0d269.mjs","_app/immutable/chunks/index.92760fb2.mjs","_app/immutable/chunks/singletons.781150dc.mjs","_app/immutable/chunks/paths.a6f5936b.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d2954f03.mjs","imports":["_app/immutable/entry/app.d2954f03.mjs","_app/immutable/chunks/index.92760fb2.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/shop/[item]",
				pattern: /^\/shop\/([^/]+?)\/?$/,
				params: [{"name":"item","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2], leaf: 5 },
				endpoint: null
			},
			{
				id: "/tamponi/acquista",
				pattern: /^\/tamponi\/acquista\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tamponi/confronta",
				pattern: /^\/tamponi\/confronta\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/tamponi/panoramica",
				pattern: /^\/tamponi\/panoramica\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
