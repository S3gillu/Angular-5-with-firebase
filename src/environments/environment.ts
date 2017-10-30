// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyApQYftf4LM7kyfNb-T6CQPUGCGm_MWmNs",
    authDomain: "fir-demo-ec88a.firebaseapp.com",
    databaseURL: "https://fir-demo-ec88a.firebaseio.com",
    projectId: "fir-demo-ec88a",
    storageBucket: "fir-demo-ec88a.appspot.com",
    messagingSenderId: "720666259323"
  }
};
