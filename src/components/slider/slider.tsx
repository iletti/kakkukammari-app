import { component$, useStyles$, useStore, $ } from "@builder.io/qwik";
import { Slider } from "qwik-slider";

// Import the image components with optimization query
import Image1 from '../slider-images/kakkukammari-slider-1.jpeg?jsx';
import Image2 from '../slider-images/kakkukammari-slider-2.jpg?jsx';
import Image3 from '../slider-images/kakkukammari-slider-3.jpg?jsx';
import Image4 from '../slider-images/kakkukammari-slider-4.jpg?jsx';
import Image5 from '../slider-images/kakkukammari-slider-5.jpg?jsx';

export const MyComponent = component$(() => {
  useStyles$(`
  .full-screen-slider {
    position: relative; /* Needed for absolute positioning of arrows */
    width: 100%; /* Slider takes full width of its container */
    max-width: 100%; /* Ensures the slider does not overflow its container */
    overflow: hidden; /* Prevents images from overflowing */
  }
  
  .slide {
    width: 100%; /* Slide takes full width of the slider */
    object-fit: contain; /* Ensures image aspect ratio is maintained */
  }
  
  .arrow {
    position: absolute;
    top: 50%; /* Centers arrow vertically */
    transform: translateY(-50%); /* Aligns arrow correctly due to its own height */
    z-index: 10;
    cursor: pointer;
    background: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
  }
  
  .arrow.left { left: 10px; }
  .arrow.right { right: 10px; }

  .slider-container {
    width: 100%; /* Adjust the width as needed for your layout */
    overflow: hidden; /* Ensures that the images do not overflow the container */
  }
  
  .slide img {
    width: 100%; /* Ensures image scales to the width of the container */
    height: auto; /* Maintains aspect ratio */
    max-height: 100%; /* Ensures image does not overflow the height of the container */
    object-fit: contain; /* Ensures that the image is scaled correctly within the container without being cropped */
  }
  
  
  `);

  const sliderSettings = {
    scrollSpeed: 5,
    gap: 20,
    showScrollbar: true,
    autoScroll: true,
    autoScrollSpeed: 10,
    styleClass: "slider-container",

  }


  const store = useStore({
    activeIndex: 0,
  });

  const nextSlide = $(() => {
    store.activeIndex = (store.activeIndex + 1) % 5; // Cycle to the next image
  });

  const prevSlide = $(() => {
    store.activeIndex = (store.activeIndex - 1 + 5) % 5; // Cycle to the previous image
  });

  return (
    <div class="full-screen-slider">
      <div class="arrow left" onClick$={prevSlide}>&lt;</div>
      <Slider {...sliderSettings}>
        <div class="slide" style={{ display: store.activeIndex === 0 ? 'block' : 'none' }}><Image1 alt="Image 1" /></div>
        <div class="slide" style={{ display: store.activeIndex === 1 ? 'block' : 'none' }}><Image2 alt="Image 2" /></div>
        <div class="slide" style={{ display: store.activeIndex === 2 ? 'block' : 'none' }}><Image3 alt="Image 3" /></div>
        <div class="slide" style={{ display: store.activeIndex === 3 ? 'block' : 'none' }}><Image4 alt="Image 4" /></div>
        <div class="slide" style={{ display: store.activeIndex === 4 ? 'block' : 'none' }}><Image5 alt="Image 5" /></div>
      </Slider>
      <div class="arrow right" onClick$={nextSlide}>&gt;</div>
    </div>
  );
});
