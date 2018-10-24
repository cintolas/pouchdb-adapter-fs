const CoreLevelPouch  = require('pouchdb-adapter-leveldb-core');
var fsdown =  require('fsdown');


function LevelDownPouch(opts, callback) {
  var _opts = Object.assign({
    db: fsdown,
    migrate: false
  }, opts);

  CoreLevelPouch.call(this, _opts, callback);
}

// overrides for normal LevelDB behavior on Node
LevelDownPouch.valid = function () {
  return true;
};
LevelDownPouch.use_prefix = false;

LevelDownPouch.use_prefix = false;
module.exports = function (PouchDB) {
  PouchDB.adapter('fs', LevelDownPouch, true);
}
