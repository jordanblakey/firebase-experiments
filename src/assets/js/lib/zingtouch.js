// ZINGTOUCH: Multi-Touch Gesture Library //////////////////////////////////////
// https://github.com/zingchart/zingtouch
import ZingTouch from "zingtouch"

// Instantiate a touch region and DOM target
const zt = new ZingTouch.Region(document.body)
const elem = document.getElementById("touch-target")

if (elem !== null) {
  // Bind Built-in Gestures to DOM target
  zt.bind(elem, "tap", function(e) {
    elem.children[6].textContent = "TAP event deteacted on: " + elem.id;
    elem.children[0].style.opacity = 1;
  }, false)
  zt.bind(elem, "swipe", function(e) {
    elem.children[6].textContent = "SWIPE event deteacted on: " + elem.id;
    elem.children[1].style.opacity = 1;
  }, true)
  zt.bind(elem, "pan", function(e) {
    elem.children[6].textContent = "PAN event deteacted on: " + elem.id;
    elem.children[2].style.opacity = 1;
  }, true)
  zt.bind(elem, "pinch", function(e) {
    elem.children[6].textContent = "PINCH event deteacted on: " + elem.id;
    elem.children[4].style.opacity = 1;
  }, false)
  zt.bind(elem, "expand", function(e) {
    elem.children[6].textContent = "EXPAND event deteacted on: " + elem.id;
    elem.children[5].style.opacity = 1;
  }, false)
  zt.bind(elem, "rotate", function(e) {
    elem.children[6].textContent = "ROTATE event deteacted on: " + elem.id;
    elem.children[3].style.opacity = 1;
  }, false)

  // Create a custom gesture
  const shorttap = new ZingTouch.Tap({ maxDelay: 100 })

  // Register that gesture in a region
  zt.register("shorttap", shorttap)

  // Bind custom gesture to DOM target
  zt.bind(elem, "shorttap", function(e) {elem.children[0].textContent = "SHORTTAP event deteacted on: " + elem.id; }, false)

  // Unbind all gestures from a DOM Element
  // zt.unbind(elem)

  // Unbind a single gesture from a DOM element
  // zt.unbind(elem, 'doubletap');
}
