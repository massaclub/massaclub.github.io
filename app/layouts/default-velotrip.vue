<template>
    <!-- <div class="minh-flexible-1 bg-header-1 text-white flex">
        <div class="mw-960 w100prc mx-auto flex flex-direction-column">
            <div class="h100prc flex align-items-center justify-content-space-between pl-15">
                menu
            </div>
        </div>
    </div> -->
    <!-- <div class="bt-orange-1 h-3"></div> -->
    <Header/>

    <div class="flex flex-grow bg-white">
        <div class="mw-960 w100prc mx-auto px-15 pt-20 pb-40">
            <div class="flex h100prc">
                <div class="mw-220 w100prc flex flex-direction-column mr-15">
                    <MenuLeft/>
                    <div class="border-dashed-1 br-8 p-15">
                        Velotrip - активный отдых на велосипеде (бывший Покатушки.org.ua)
                    </div>
                </div>
                <div class="w100prc border-dashed-1 br-8 p-15">
                    <slot/><!-- сюда подставляются наши app\pages -->
                </div>
            </div>

        </div>
    </div>

    <Footer/>
    <!-- <div class="bt-orange-1 h-3"></div> -->
    <div class="minh-53 bg-footer-1 font-2 fonts-style-1 fs-085rem text-white">
        <div class="mw-960 w100prc mx-auto px-15 pt-5px flex justify-content-space-between align-items-center flex-wrap gap-5-10">
            <div class="flex align-items-center flex-nowrap">
                
            </div>
            <div>
                <span data-print-here="copyright">Copyright</span>
            </div>
        </div>
    </div>

    <Counters/>
</template>

<style>
header a:not(.router-link-exact-active):hover {
    text-decoration: underline;
} 

header a.router-link-exact-active {
    color: #ffb636 !important;
    font-weight: 500;
}
</style>