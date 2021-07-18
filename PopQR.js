function PopQR(e, f, q) {
  
log("====================================");
log("q: The name of the QR field.");
log("f: The name of the field from which to copy.");
log("e: The current entry.");
log("====================================");

if (e == null || f == null || q == null) {
  message("Please fill all parameters")
  cancel();
} else {
var i = e.field(f);



e.set(q, i);
  
  message(q + " set to " + i);
}
}
