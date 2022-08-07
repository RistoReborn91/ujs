function GenNewID(e2) {

// Can be set as a Create Entry Pre-Save Trigger if the I field is not set to be unique.

var e = lib().entries();
var max = e.length;

for (var i = 0; i < e.length; i++) {
  var cid = e[i].field("I");
  if (max < cid)
    max = cid;
}


var newid = max + 1;


e2.set("I", newid);

message("Entry index is now # " + newid);


}

