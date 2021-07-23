function SetOnLink(e, f, v, xl) {

log("====================================");
log("xl: The name of the external library.");
log("v: The value to which the lf will be set.");
log("f: The name of the local field.");
log("e: The current entry().");
log("====================================");


var exlib = libByName(xl);
var links = exlib.linksTo(e);

for (var i = 0; i < links.length; i++) {
  if (links[i] == e) {
    e.set(f, v);
    message(f + " was set to " + v);
  }
}

 

} // SetOnLink
