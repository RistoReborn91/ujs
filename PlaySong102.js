function PlaySong(e, _field) {

var bgm = e.field(_field);

if (bgm.length == 0)
  message("This entry does not have any " + _field + " links.");
else {
var bgm1 = bgm[0];
var q = bgm1.field("◻ ID"); 

i = intent("android.media.action.MEDIA_PLAY_FROM_SEARCH"); 
i.extra("query", q); 
message("Playing " + q); 
i.send();
}
}
