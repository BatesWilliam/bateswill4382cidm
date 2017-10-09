Use the following commands in the cloud 9 shell:


mongoimport -h ds157624.mlab.com:57624 -d cidm4382 -c ClimbData -u Babb -p babbPass --file ClimbData.json

mongoimport -h ds157624.mlab.com:57624 -d cidm4382 -c LandingData -u Babb -p babbPass --file LandingData.json

mongoimport -h ds157624.mlab.com:57624 -d cidm4382 -c TakeoffData -u Babb -p babbPass --file TakeoffData.json