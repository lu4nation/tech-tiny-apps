
var events = [];
var eventIdSeq = 0;

exports.create = function (event) {
  var id = eventIdSeq++;
  events[id] = event;
  events[id].id = id;
};

exports.read = function (id) {
  return events[id];
};

exports.update = function (id, event) {
  events[id] = event;
};

exports.delete = function (id) {
  delete events[id];
};

exports.query = function () {
  return events.filter(function (event) {
    return event !== undefined;
  });
};
