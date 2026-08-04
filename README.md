[![GBIF Hosted Portal](https://docs.gbif.org/style/gbif-hosted-portal.svg)](https://github.com/gbif/hosted-portals)
[![Build Status](https://builds.gbif.org/job/hp-dassco/badge/icon)](https://builds.gbif.org/job/hp-dassco/lastBuild/console)
<!-- License badge example: [![CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY%2D-SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/) -->

# GBIF Hosted Portal: dassco

This Jekyll website, **[dassco (Staging)](https://dassco.hp.gbif-staging.org/)**, makes use of a theme and biodiversity widgets developed by the GBIF network.

You can find information on editing this site and more on [gbif/hosted-portals](https://github.com/gbif/hosted-portals)

> Powered by [GBIF](https://www.gbif.org/)


# DaSSCo notes

Adding new collections requires adding a new GBIF dataset key in the array datasetKeys found in [config.js](_includes/js/config.js).

See build status on [GBIF Jenkins server](https://builds.gbif.org/view/Hosted%20Portals/job/hp-dassco/).

To run the website locally during development use the Docker setup at [https://github.com/gbif/hosted-portals/tree/main/docker](https://github.com/gbif/hosted-portals/tree/main/docker).

On MacOS you can use podman at do the following:

```sh
podman machine init
podman machine start
```
Maybe set environment variable (must be changed to fit the output of the start command):
```sh
export DOCKER_HOST='unix:///var/folders/0m/yfsc5z1x50z9dtxgvd7bjj280000gp/T/podman/podman-machine-default-api.sock'
```

Then change directory into your local clone of the hp-dassco repository at do:
```sh
podman run -it -e JEKYLL_ENV=development --rm --volume="$PWD:/srv/jekyll" -p 4000:4000 docker.gbif.org/fast-jekyll:4.1.0 jekyll serve --strict-front-matter
```

The web server is now available on [http://0.0.0.0:4000/](http://0.0.0.0:4000/).
This only works for everything produced by Jekyll but not for the GBIF search plugins.