function makeQuoteDisplayEl(idx, quote) {
    const el = document.createElement('div');
    el.setAttribute("class", "hidden duration-700 ease-in-out");
    el.setAttribute("data-carousel-item", "");

    el.innerHTML = `
    <div class="inline block w-half">
    <div id="toast-interactive" class="content-center p-4 text-black-500 bg-white rounded-lg shadow dark:bg-black-800 dark:text-black-400 drop-shadow-lg" role="alert">
    <div class="flex content-center">
    <div class="ms-3 text-sm font-normal">
    <img class="h-auto max-w-lg rounded-lg" src="mac1.jpg"
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-black">${idx}/10</span>
    <div class="mb-2 text-sm font-normal">"${quote.quote}"</div> 
    <div class="grid grid-cols-2 gap-2">
    <div>
    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onclick="pick(${quote.id}, 1)">Mac</button>
    </div>
    <div>
    <button type="button" class="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onclick="pick(${quote.id}, 2)">RFK</button>
    </div>
    </div>    
    </div>
    </div>
    <button type="button" class="hidden absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" id="carousel-next" data-carousel-next>
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
    <span class="sr-only">Next</span>
    </span>
    </button>
    </div>
    </div>
    `;

    return el;
}
