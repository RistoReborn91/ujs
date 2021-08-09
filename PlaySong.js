function PlaySong(_field) {
var q = entry().field(_field)[0].field("ID");

i = intent("android.media.action.MEDIA_PLAY_FROM_SEARCH");

i.extra("query", q);

message("Playing " + q);

i.send();
}
