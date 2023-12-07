function Plant() {
  return (
    <div class="m-16 flex justify-center items-center" role="main">
      <div class="px-16">
        <p class="h-10">🪴 Plant-a-holic</p>
        <hr class="w-3/5" />
        <h1
          class="mt-6 text-5xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug"
          role="heading"
          aria-level="1"
        >
          We got your plants. <br />
          <span class="text-green-700" role="heading" aria-level="1">
            And we deliver them for you.
          </span>
        </h1>
        <p class="w-3/5 mt-2 text-gray-600 text-lg" aria-level="2">
          Our hand-picked collection of plants gives you all the natural wonders
          you ever wanted in your room, living space or even kitchen.
        </p>
        <div class="mt-8 flex" aria-level="3" role="button">
          <a
            class="flex items-center justify-center px-8 py-3 font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900"
            href="#"
          >
            See the collection
          </a>
          <a
            class="flex items-center justify-center px-8 py-3 ml-4 font-medium rounded-md text-green-700 bg-white shadow uppercase hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:shadow-lg"
            href="#"
          >
            Learn more
          </a>
        </div>
      </div>
      <div class="mr-40" role="img">
        <img
          class="object-cover object-center w-96 rounded-md hover:shadow-lg transform transition hover:-translate-y-2"
          src="https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg"
          alt="Image of plants"
        />
      </div>
    </div>
  );
}

export default Plant;
