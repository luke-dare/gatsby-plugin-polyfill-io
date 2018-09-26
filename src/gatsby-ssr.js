import React from 'react'

export function onRenderBody({ setPostBodyComponents }, options){
	let args = []
	let minify='.min'
	for (let i in options) {
		if (i === 'plugins') continue
		if (i === 'minify') {
			minify=options[i]
			continue
		}
		let opt = options[i]
		if (Array.isArray(opt)) {
			opt = opt.join(`,`)
		}
		args.push(`${i}=${opt}`)
	}
	if (args.length) {
		args = `?${args.join(`&`)}`
	}
	else {
		args = ``
	}
	setPostBodyComponents([
		<script
			key='polyfill-io'
			src={`https://cdn.polyfill.io/v2/polyfill${minify}.js${args}`}
		/>
	])
}