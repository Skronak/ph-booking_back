https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
//Step 4 skip

--https://medium.com/boca-code/the-basic-process-is-that-we-will-use-firebase-cloud-functions-to-create-a-single-function-app-13ba3b852077
https://firebase.google.com/docs/functions/get-started?hl=fr&gen=2nd
Create app on firebase
npm i -g firebase-tools
firebase login
mkdir deploy-api
cd deploy-api
firebase init hosting
firebase init functions
cd functions

Now we need to setup hosting to direct all requests to this cloud function. In the firebase.json file, add the following under hosting:
“rewrites”: [{
“source”: “**”,
“function”: “app”
}],

We can test our api locally by running
firebase emulators:start
We can deploy to firebase using
firebase deploy
------------------------------------
