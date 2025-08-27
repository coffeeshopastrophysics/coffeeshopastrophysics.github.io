run-local:
	touch postcss.config.js && hugo server --disableFastRender -D

build:
	rm -r docs && touch postcss.config.js && hugo
	
