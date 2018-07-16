import Macy from 'macy'

const macy = Macy({
  container: '#macy-container',
  trueOrder: false,
  waitForImages: false,
  margin: 16,
  columns: 3,
  breakAt: {
      1024: 3,
      1023: 2,
      640: 1,
      0: 1
  }
});

// // macy.recalculate();
// macy.runOnImageLoad(function() {
//   console.log('Every time an image loads I get fired');
//   macy.recalculate(true);
// }, true)

// // macy.reInit();
// // macy.remove();

// // EVENT LISTENERS /////////////////////////////////////////////////////////////

macy.on(macy.constants.EVENT_INITIALIZED, function (ctx){
  console.log('Macy instance initialized/reinitialized.')
})
// macy.on(macy.constants.EVENT_RECALCULATED, function (ctx){
//   console.log('Macy recalculated layout.')
// })
macy.on(macy.constants.EVENT_IMAGE_LOAD, function (ctx){
  console.log('Macy detected that an image loaded.');
});
macy.on(macy.constants.EVENT_IMAGE_COMPLETE, function (ctx){
  console.log('Macy detected that all images have loaded.');
});
macy.on(macy.constants.EVENT_RESIZE, function (ctx){
  console.log('Macy detected that the document has been resized.');
});