export default `
:root {
	--width: 8.5in;
	--height: 11in;
	--margin-top: 1in;
	--margin-right: 1in;
	--margin-bottom: 1in;
	--margin-left: 1in;
	--bleed-top: 0;
	--bleed-right: 0;
	--bleed-bottom: 0;
	--bleed-left: 0;
	--crop-color: black;
	--crop-offset: 2mm;
	--crop-stroke: 1px;
	--cross-size: 5mm;
	--mark-cross-display: none;
	--mark-crop-display: none;
	--page-count: 0;
}

@page {
	size: letter;
	margin: 0;
}

.pagedjs_sheet {
	box-sizing: border-box;
	width: var(--width);
	height: var(--height);
	overflow: hidden;
	position: relative;
	display: grid;
	grid-template-columns: [bleed-left] var(--bleed-left) [sheet-center] calc(var(--width) - var(--bleed-left) - var(--bleed-right)) [bleed-right] var(--bleed-right);
	grid-template-rows: [bleed-top] var(--bleed-top) [sheet-middle] calc(var(--height) - var(--bleed-top) - var(--bleed-bottom)) [bleed-bottom] var(--bleed-bottom);
}

.pagedjs_bleed {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	overflow: hidden;
}

.pagedjs_bleed-top {
	grid-column: bleed-left / -1;
	grid-row: bleed-top;
	flex-direction: row;
}

.pagedjs_bleed-bottom {
	grid-column: bleed-left / -1;
	grid-row: bleed-bottom;
	flex-direction: row;
}

.pagedjs_bleed-left {
	grid-column: bleed-left;
	grid-row: bleed-top / -1;
	flex-direction: column;
}

.pagedjs_bleed-right {
	grid-column: bleed-right;
	grid-row: bleed-top / -1;
	flex-direction: column;
}

.pagedjs_marks-crop {
	display: var(--mark-crop-display);
	flex-grow: 0;
	flex-shrink: 0;
}

.pagedjs_bleed-top .pagedjs_marks-crop:nth-child(1),
.pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(1) {
	width: calc(var(--bleed-left) - var(--crop-stroke));
	border-right: var(--crop-stroke) solid var(--crop-color);
}

.pagedjs_bleed-top .pagedjs_marks-crop:nth-child(3),
.pagedjs_bleed-bottom .pagedjs_marks-crop:nth-child(3) {
	width: calc(var(--bleed-right) - var(--crop-stroke));
	border-left: var(--crop-stroke) solid var(--crop-color);
}

.pagedjs_bleed-top .pagedjs_marks-crop {
	align-self: flex-start;
	height: calc(var(--bleed-top) - var(--crop-offset));
}

.pagedjs_bleed-bottom .pagedjs_marks-crop {
	align-self: flex-end;
	height: calc(var(--bleed-bottom) - var(--crop-offset));
}

.pagedjs_bleed-left .pagedjs_marks-crop:nth-child(1),
.pagedjs_bleed-right .pagedjs_marks-crop:nth-child(1) {
	height: calc(var(--bleed-top) - var(--crop-stroke));
	border-bottom: var(--crop-stroke) solid var(--crop-color);
}

.pagedjs_bleed-left .pagedjs_marks-crop:nth-child(3),
.pagedjs_bleed-right .pagedjs_marks-crop:nth-child(3) {
	height: calc(var(--bleed-bottom) - var(--crop-stroke));
	border-top: var(--crop-stroke) solid var(--crop-color);
}

.pagedjs_bleed-left .pagedjs_marks-crop {
	width: calc(var(--bleed-left) - var(--crop-offset));
	align-self: flex-start;
}

.pagedjs_bleed-right .pagedjs_marks-crop {
	width: calc(var(--bleed-right) - var(--crop-offset));
	align-self: flex-end;
}

.pagedjs_marks-middle {
	display: flex;
	flex-grow: 1;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
}

.pagedjs_marks-cross {
	display: var(--mark-cross-display);
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMi41MzdweCIgaGVpZ2h0PSIzMi41MzdweCIgdmlld0JveD0iMC4xMDQgMC4xMDQgMzIuNTM3IDMyLjUzNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwLjEwNCAwLjEwNCAzMi41MzcgMzIuNTM3IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy4zODkzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yOS45MzEsMTYuMzczYzAsNy40ODktNi4wNjgsMTMuNTYtMTMuNTU4LDEzLjU2Yy03LjQ4MywwLTEzLjU1Ny02LjA3Mi0xMy41NTctMTMuNTZjMC03LjQ4Niw2LjA3NC0xMy41NTQsMTMuNTU3LTEzLjU1NEMyMy44NjIsMi44MTksMjkuOTMxLDguODg3LDI5LjkzMSwxNi4zNzN6Ii8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuMzg5MyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMC4xMDQiIHkxPSIxNi4zNzMiIHgyPSIzMi42NDIiIHkyPSIxNi4zNzMiLz48bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy4zODkzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxNi4zNzMiIHkxPSIwLjEwNCIgeDI9IjE2LjM3MyIgeTI9IjMyLjY0MiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjM4OTMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjUwOCwxNi4zNzNjMCw0LjQ5Ni0zLjYzOCw4LjEzNS04LjEzNSw4LjEzNWMtNC40OTEsMC04LjEzNS0zLjYzOC04LjEzNS04LjEzNWMwLTQuNDg5LDMuNjQ0LTguMTM1LDguMTM1LTguMTM1QzIwLjg2OSw4LjIzOSwyNC41MDgsMTEuODg0LDI0LjUwOCwxNi4zNzN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjkuOTMxLDE2LjM3M2MwLDcuNDg5LTYuMDY4LDEzLjU2LTEzLjU1OCwxMy41NmMtNy40ODMsMC0xMy41NTctNi4wNzItMTMuNTU3LTEzLjU2YzAtNy40ODYsNi4wNzQtMTMuNTU0LDEzLjU1Ny0xMy41NTRDMjMuODYyLDIuODE5LDI5LjkzMSw4Ljg4NywyOS45MzEsMTYuMzczeiIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjY3NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjAuMTA0IiB5MT0iMTYuMzczIiB4Mj0iMzIuNjQyIiB5Mj0iMTYuMzczIi8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTYuMzczIiB5MT0iMC4xMDQiIHgyPSIxNi4zNzMiIHkyPSIzMi42NDIiLz48cGF0aCBkPSJNMjQuNTA4LDE2LjM3M2MwLDQuNDk2LTMuNjM4LDguMTM1LTguMTM1LDguMTM1Yy00LjQ5MSwwLTguMTM1LTMuNjM4LTguMTM1LTguMTM1YzAtNC40ODksMy42NDQtOC4xMzUsOC4xMzUtOC4xMzVDMjAuODY5LDguMjM5LDI0LjUwOCwxMS44ODQsMjQuNTA4LDE2LjM3MyIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjY3NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjguMjM5IiB5MT0iMTYuMzczIiB4Mj0iMjQuNTA4IiB5Mj0iMTYuMzczIi8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuNjc3OCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTYuMzczIiB5MT0iOC4yMzkiIHgyPSIxNi4zNzMiIHkyPSIyNC41MDgiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: var(--cross-size);

  z-index: 2147483647;
	width: var(--cross-size);
	height: var(--cross-size);
}

.pagedjs_pagebox {
	box-sizing: border-box;
	width: var(--width);
	height: var(--height);
	position: relative;
	display: grid;
	grid-template-columns: [left] var(--margin-left) [center] calc(var(--width) - var(--margin-left) - var(--margin-right)) [right] var(--margin-right);
	grid-template-rows: [header] var(--margin-top) [page] calc(var(--height) - var(--margin-top) - var(--margin-bottom)) [footer] var(--margin-bottom);
	grid-column: sheet-center;
	grid-row: sheet-middle;
}

.pagedjs_pagebox * {
	box-sizing: border-box;
}

.pagedjs_margin-top {
	width: calc(var(--width) - var(--margin-left) - var(--margin-right));
	height: var(--margin-top);
	grid-column: center;
	grid-row: header;
	flex-wrap: nowrap;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
}

.pagedjs_margin-top-left-corner-holder {
	width: var(--margin-left);
	height: var(--margin-top);
	display: flex;
	grid-column: left;
	grid-row: header;
}

.pagedjs_margin-top-right-corner-holder {
	width: var(--margin-right);
	height: var(--margin-top);
	display: flex;
	grid-column: right;
	grid-row: header;
}

.pagedjs_margin-top-left-corner {
	width: var(--margin-left);
}

.pagedjs_margin-top-right-corner {
	width: var(--margin-right);
}

.pagedjs_margin-right {
	height: calc(var(--height) - var(--margin-top) - var(--margin-bottom));
	width: var(--margin-right);
	right: 0;
	grid-column: right;
	grid-row: page;
	display: grid;
	grid-template-rows: repeat(3, 33.3333%);
	grid-template-columns: 100%;
}

.pagedjs_margin-bottom {
	width: calc(var(--width) - var(--margin-left) - var(--margin-right));
	height: var(--margin-bottom);
	grid-column: center;
	grid-row: footer;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
}

.pagedjs_margin-bottom-left-corner-holder {
	width: var(--margin-left);
	height: var(--margin-bottom);
	display: flex;
	grid-column: left;
	grid-row: footer;
}

.pagedjs_margin-bottom-right-corner-holder {
	width: var(--margin-right);
	height: var(--margin-bottom);
	display: flex;
	grid-column: right;
	grid-row: footer;
}

.pagedjs_margin-bottom-left-corner {
	width: var(--margin-left);
}

.pagedjs_margin-bottom-right-corner {
	width: var(--margin-right);
}



.pagedjs_margin-left {
	height: calc(var(--height) - var(--margin-top) - var(--margin-bottom));
	width: var(--margin-left);
	grid-column: left;
	grid-row: page;
	display: grid;
	grid-template-rows: repeat(3, 33.33333%);
	grid-template-columns: 100%;
}

.pagedjs_pages .pagedjs_pagebox .pagedjs_margin:not(.hasContent) {
	visibility: hidden;
}

.pagedjs_pagebox > .pagedjs_area {
	grid-column: center;
	grid-row: page;
	width: 100%;
	height: 100%;
}

.pagedjs_pagebox > .pagedjs_area > .pagedjs_page_content {
	width: 100%;
	height: 100%;
	position: relative;
	column-fill: auto;
}

.pagedjs_page {
	counter-increment: page;
}

.pagedjs_pages {
	counter-reset: pages var(--page-count);
}


.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner,
.pagedjs_pagebox .pagedjs_margin-top-left,
.pagedjs_pagebox .pagedjs_margin-top-right,
.pagedjs_pagebox .pagedjs_margin-bottom-left,
.pagedjs_pagebox .pagedjs_margin-bottom-right,
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_margin-right-middle,
.pagedjs_margin-left-middle  {
	display: flex;
	align-items: center;
}

.pagedjs_margin-right-top,
.pagedjs_margin-left-top  {
	display: flex;
	align-items: flex-top;
}


.pagedjs_margin-right-bottom,
.pagedjs_margin-left-bottom  {
	display: flex;
	align-items: flex-end;
}



/*
.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center {
	height: 100%;
	display: none;
	align-items: center;
	flex: 1 0 33%;
	margin: 0 auto;
}

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner {
	display: none;
	align-items: center;
}

.pagedjs_pagebox .pagedjs_margin-left-top,
.pagedjs_pagebox .pagedjs_margin-right-top {
	display: none;
	align-items: flex-start;
}

.pagedjs_pagebox .pagedjs_margin-right-middle,
.pagedjs_pagebox .pagedjs_margin-left-middle {
	display: none;
	align-items: center;
}

.pagedjs_pagebox .pagedjs_margin-left-bottom,
.pagedjs_pagebox .pagedjs_margin-right-bottom {
	display: none;
	align-items: flex-end;
}
*/

.pagedjs_pagebox .pagedjs_margin-top-left,
.pagedjs_pagebox .pagedjs_margin-top-right-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-left,
.pagedjs_pagebox .pagedjs_margin-bottom-right-corner { text-align: left; }

.pagedjs_pagebox .pagedjs_margin-top-left-corner,
.pagedjs_pagebox .pagedjs_margin-top-right,
.pagedjs_pagebox .pagedjs_margin-bottom-left-corner,
.pagedjs_pagebox .pagedjs_margin-bottom-right { text-align: right; }

.pagedjs_pagebox .pagedjs_margin-top-center,
.pagedjs_pagebox .pagedjs_margin-bottom-center,
.pagedjs_pagebox .pagedjs_margin-left-top,
.pagedjs_pagebox .pagedjs_margin-left-middle,
.pagedjs_pagebox .pagedjs_margin-left-bottom,
.pagedjs_pagebox .pagedjs_margin-right-top,
.pagedjs_pagebox .pagedjs_margin-right-middle,
.pagedjs_pagebox .pagedjs_margin-right-bottom { text-align: center; }

.pagedjs_pages .pagedjs_margin .pagedjs_margin-content {
	width: 100%;
}

.pagedjs_pages .pagedjs_margin-left .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-top .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-right .pagedjs_margin-content::after,
.pagedjs_pages .pagedjs_margin-bottom .pagedjs_margin-content::after {
	display: block;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-to] {
	margin-bottom: unset;
	padding-bottom: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-from] {
	text-indent: unset;
	margin-top: unset;
	padding-top: unset;
	initial-letter: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-from] > *::first-letter,
.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]::first-letter {
	color: unset;
	font-size: unset;
	font-weight: unset;
	font-family: unset;
	color: unset;
	line-height: unset;
	float: unset;
	padding: unset;
	margin: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-to]:after,
.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-to]::after {
	content: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]:before,
.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div [data-split-from]::before {
	content: unset;
}

.pagedjs_pages > .pagedjs_page > .pagedjs_pagebox > .pagedjs_area > div li[data-split-from]:first-of-type {
	list-style: none;
}

/*
[data-page]:not([data-split-from]),
[data-break-before="page"]:not([data-split-from]),
[data-break-before="always"]:not([data-split-from]),
[data-break-before="left"]:not([data-split-from]),
[data-break-before="right"]:not([data-split-from]),
[data-break-before="recto"]:not([data-split-from]),
[data-break-before="verso"]:not([data-split-from])
{
	break-before: column;
}

[data-page]:not([data-split-to]),
[data-break-after="page"]:not([data-split-to]),
[data-break-after="always"]:not([data-split-to]),
[data-break-after="left"]:not([data-split-to]),
[data-break-after="right"]:not([data-split-to]),
[data-break-after="recto"]:not([data-split-to]),
[data-break-after="verso"]:not([data-split-to])
{
	break-after: column;
}
*/

.pagedjs_clear-after::after {
	content: none !important;
}

img {
	height: auto;
}

@media print {
	html {
		width: 100%;
		height: 100%;
	}
	body {
		margin: 0;
		padding: 0;
		width: 100% !important;
		height: 100% !important;
		min-width: 100%;
		max-width: 100%;
		min-height: 100%;
		max-height: 100%;
	}
	.pagedjs_pages {
		width: var(--width);
		display: block !important;
		transform: none !important;
		height: 100% !important;
		min-height: 100%;
		max-height: 100%;
		overflow: visible;
	}
	.pagedjs_page {
		margin: 0;
		padding: 0;
		max-height: 100%;
		min-height: 100%;
		height: 100% !important;
		page-break-after: always;
		break-after: page;
	}
}
`;
