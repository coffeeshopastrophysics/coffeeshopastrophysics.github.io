run-local:
	touch postcss.config.js && hugo server --disableFastRender -D

build:
	touch postcss.config.js && hugo
	
