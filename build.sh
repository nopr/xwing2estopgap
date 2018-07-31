!# /bin/bash
echo 'Running NG Build'
ng build
echo 'Recreating 404.html'
cp ./docs/index.html ./docs/404.html
