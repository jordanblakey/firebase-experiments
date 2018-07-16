// RELLAX: Parallax Library ////////////////////////////////////////////////////
// https://github.com/dixonandmoe/rellax
import Rellax from "rellax";

if (document.querySelector('.rellax') !== null) {
  const rellax = new Rellax(".rellax", {
    speed: -2,
    center: true,
    round: true,
    vertical: true,
    horizontal: false
  });

  // EXAMPLES ////////////////////////////////////////////////////////////////////
  // <div class="rellax">
  //   I’m that default chill speed of "-2" and default z-index of 0
  // </div>
  // <div class="rellax" data-rellax-speed="7" data-rellax-zindex="5">
  //  I’m super fast!! And on top of the previous element, I'm z-index 5!!
  // </div>
  // <div class="rellax" data-rellax-speed="-4" data-rellax-percentage="0.5">
  //   I’m extra slow and smooth, and hella centered.
  // </div>

  // // End Rellax and reset parallax elements to their original positions
  // rellax.destroy();
}
