function SetOnLink(e, f, v, xl) {

log("====================================");
log("xl: The name of the external library.");
log("v: The value to which the lf will be set.");
log("f: The name of the local field.");
log("e: The current entry().");
log("====================================");


 if (masterLib().title == xl) {
  e.set(f, v);
  message(f + " was set to " + v);
 }

} // SetOnLink
