function makeQuoteDisplayEl(idx, quote) {
    const el = document.createElement('div');
    el.setAttribute("class", "hidden duration-700 ease-in-out");
    el.setAttribute("data-carousel-item", "");

    el.innerHTML = `
    <div class="container mx-auto m-10">
        <div class="container mx-auto w-full md:w-1/2 p-10 md:p-0 text-center text-sm font-normal">
            <img class="h-60 mx-auto m-3 rounded-lg" src="${idx}.jpg" />
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-black">${idx}/10</span>
            <div class="mb-2 text-sm font-normal my-2">"${quote.quote}"</div>
            <div class="grid grid-cols-2 my-2 gap-7">
                <div>
                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onclick="pick(${quote.id}, 1)">Mac</button>
                </div>
                <div>
                    <button type="button" class="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onclick="pick(${quote.id}, 2)">RFK</button>
                </div>
            </div>
        </div>
        <button type="button" class="hidden" id="carousel-next" data-carousel-next></button>
    </div>
    `;

    return el;
}
