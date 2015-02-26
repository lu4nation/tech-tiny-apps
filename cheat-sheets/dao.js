
var events = [];
var eventIdSeq = 0;

exports.save = function (event) {
  events[eventIdSeq++] = event;
};

exports.events = events;
