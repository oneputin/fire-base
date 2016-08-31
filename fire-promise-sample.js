// Setup Promises 
// 
let addTeam(team) {
    return new Promise((resolve, reject) => {
        let newRef = dataRef.child('teams').push(team);
        if (newRef) {
            resolve(newRef.key());
        } else {
            reject("The write operation failed");
        }
    });
};

// A. 
let addTeamIndex(indexData, key) {
    return new Promise((resolve) => {
        dataRef.child('team-index').child(key).set(indexData);
        resolve();
    });
};

// B. 
let addTeamIndex(indexData, key) {
    dataRef.child('team-index').child(key).set(indexData);
    return Promise.resolve();
};


// Use promises 
addTeam(team).then( key => {
    addTeamIndex({
        name: team.name,
        founded: team.founded  
     }, key);
}, console.log);


// another sample 
app.get("/cac", function(req, res){

  var firebaseData = {};

  function getFirebaseData(endpoint){
    return firebase.database().ref(endpoint).once("value", function(snapshot){
        return snapshot.val();
    });
  }

  Promise.all([getFirebaseData("CAC_Members"), getFirebaseData("CAC_Events")])
         .then( function(snapshots) {
            firebaseData.members = snapshots[0];
            firebaseData.events  = snapshots[1]; console.log(firebaseData);
            res.render("cac", firebaseData);
        });
});